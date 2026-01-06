import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Trash2, Users, FileSpreadsheet, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  getRegistrations,
  exportToExcel,
  clearRegistrations,
  Registration,
} from "@/lib/registrationStore";
import { pongalEvents } from "@/lib/eventData";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Admin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const { toast } = useToast();

  const loadRegistrations = () => {
    setRegistrations(getRegistrations());
  };

  useEffect(() => {
    loadRegistrations();
  }, []);

  const totalEventRegistrations = registrations.reduce(
    (sum, reg) => sum + reg.events.length,
    0
  );

  const eventCounts: Record<number, number> = {};
  registrations.forEach((reg) => {
    reg.events.forEach((eventId) => {
      eventCounts[eventId] = (eventCounts[eventId] || 0) + 1;
    });
  });

  const handleExport = () => {
    exportToExcel();
    toast({
      title: "Export Successful",
      description: "The Excel file has been downloaded.",
    });
  };

  const handleClear = () => {
    clearRegistrations();
    loadRegistrations();
    toast({
      title: "Data Cleared",
      description: "All registrations have been deleted.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 kolam-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-primary-foreground/80">
              View and manage event registrations
            </p>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">
                      {registrations.length}
                    </p>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <FileSpreadsheet className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">
                      {totalEventRegistrations}
                    </p>
                    <p className="text-sm text-muted-foreground">Event Registrations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">12</p>
                    <p className="text-sm text-muted-foreground">Total Events</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Actions & Data */}
      <section className="py-12 bg-background flex-1">
        <div className="container mx-auto px-4">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={loadRegistrations} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh Data
            </Button>
            <Button
              onClick={handleExport}
              variant="festive"
              className="gap-2"
              disabled={registrations.length === 0}
            >
              <Download className="h-4 w-4" />
              Download Excel
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="gap-2"
                  disabled={registrations.length === 0}
                >
                  <Trash2 className="h-4 w-4" />
                  Clear All Data
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete all
                    registration data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClear}>
                    Yes, delete all
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* Event-wise Stats */}
          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="font-heading">Event-wise Registration Count</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {pongalEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
                  >
                    <span className="text-sm truncate">{event.icon} {event.name}</span>
                    <Badge variant="secondary">{eventCounts[event.id] || 0}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Registrations Table */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-heading">All Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              {registrations.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <span className="text-4xl block mb-4">📋</span>
                  No registrations yet. Share the registration link with students!
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Reg. No.</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Mobile</TableHead>
                        <TableHead>Events</TableHead>
                        <TableHead>Team</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {registrations.map((reg, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {reg.studentName}
                          </TableCell>
                          <TableCell>{reg.registerNumber}</TableCell>
                          <TableCell className="max-w-[150px] truncate">
                            {reg.department}
                          </TableCell>
                          <TableCell>{reg.year}</TableCell>
                          <TableCell className="max-w-[180px] truncate">
                            {reg.email}
                          </TableCell>
                          <TableCell>{reg.mobile}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1 max-w-[200px]">
                              {reg.events.slice(0, 3).map((eventId) => {
                                const event = pongalEvents.find(
                                  (e) => e.id === eventId
                                );
                                return (
                                  <Badge
                                    key={eventId}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {event?.icon}
                                  </Badge>
                                );
                              })}
                              {reg.events.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{reg.events.length - 3}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{reg.teamName || "—"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
