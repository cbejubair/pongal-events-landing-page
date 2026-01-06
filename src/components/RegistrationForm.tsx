import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { pongalEvents, departments, years } from "@/lib/eventData";
import { addRegistration } from "@/lib/registrationStore";

const formSchema = z.object({
  studentName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  registerNumber: z
    .string()
    .trim()
    .min(5, "Register number must be at least 5 characters")
    .max(20, "Register number must be less than 20 characters"),
  department: z.string().min(1, "Please select a department"),
  year: z.string().min(1, "Please select your year"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(255, "Email must be less than 255 characters"),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  events: z.array(z.number()).min(1, "Please select at least one event"),
  teamName: z.string().trim().max(50, "Team name must be less than 50 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

export const RegistrationForm = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const preselectedEvent = searchParams.get("event");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      registerNumber: "",
      department: "",
      year: "",
      email: "",
      mobile: "",
      events: preselectedEvent ? [parseInt(preselectedEvent)] : [],
      teamName: "",
    },
  });

  const selectedEvents = form.watch("events");
  const hasTeamEvents = selectedEvents.some(
    (id) => pongalEvents.find((e) => e.id === id)?.isTeamEvent
  );

  useEffect(() => {
    if (preselectedEvent) {
      form.setValue("events", [parseInt(preselectedEvent)]);
    }
  }, [preselectedEvent, form]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const success = addRegistration({
      studentName: data.studentName,
      registerNumber: data.registerNumber,
      department: data.department,
      year: data.year,
      email: data.email,
      mobile: data.mobile,
      events: data.events,
      teamName: data.teamName,
    });

    setIsSubmitting(false);

    if (success) {
      setIsSuccess(true);
      toast({
        title: "🎉 Registration Successful!",
        description: `You have registered for ${data.events.length} event(s). We look forward to seeing you!`,
      });
    } else {
      toast({
        title: "Already Registered",
        description: "You have already registered for one or more of these events.",
        variant: "destructive",
      });
    }
  };

  if (isSuccess) {
    return (
      <Card className="max-w-2xl mx-auto border-2 border-accent/30 animate-scale-in">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-accent" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Registration Complete!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Thank you for registering for Pongal Celebration 2026. We can't wait to see you there!
          </p>
          <Button
            variant="default"
            onClick={() => {
              setIsSuccess(false);
              form.reset();
            }}
          >
            Register for More Events
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto border-2 shadow-card">
      <CardHeader className="border-b border-border bg-muted/30">
        <CardTitle className="font-heading text-2xl text-center">
          Event Registration Form
        </CardTitle>
        <p className="text-center text-muted-foreground text-sm">
          Fill in your details and select the events you want to participate in
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Student Name */}
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Register Number */}
            <FormField
              control={form.control}
              name="registerNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Register Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 21CS101" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Department & Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email & Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email ID *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="10-digit mobile number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Event Selection */}
            <FormField
              control={form.control}
              name="events"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base">Select Events *</FormLabel>
                  <div className="mt-2 space-y-4">
                    {[1, 2, 3].map((day) => (
                      <div key={day} className="space-y-2">
                        <h4 className="text-sm font-semibold text-muted-foreground">
                          Day {day} – {pongalEvents.find((e) => e.day === day)?.category || ""}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {pongalEvents
                            .filter((e) => e.day === day)
                            .map((event) => (
                              <FormField
                                key={event.id}
                                control={form.control}
                                name="events"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-2 space-y-0 rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(event.id)}
                                        onCheckedChange={(checked) => {
                                          const value = field.value || [];
                                          if (checked) {
                                            field.onChange([...value, event.id]);
                                          } else {
                                            field.onChange(
                                              value.filter((id) => id !== event.id)
                                            );
                                          }
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="flex-1 cursor-pointer text-sm font-normal">
                                      <span className="mr-2">{event.icon}</span>
                                      {event.name}
                                      {event.isTeamEvent && (
                                        <span className="ml-2 text-xs text-accent">(Team)</span>
                                      )}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Team Name (conditional) */}
            {hasTeamEvents && (
              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem className="animate-fade-in">
                    <FormLabel>Team Name (for team events)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your team name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Submit */}
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Register Now"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
