import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, User } from "lucide-react";
import { PongalEvent } from "@/lib/eventData";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: PongalEvent;
  index: number;
}

const dayColors = {
  1: "bg-primary/10 text-primary border-primary/30",
  2: "bg-accent/10 text-accent border-accent/30",
  3: "bg-secondary/20 text-secondary-foreground border-secondary/30",
};

const dayBgColors = {
  1: "hover:border-primary/50",
  2: "hover:border-accent/50",
  3: "hover:border-secondary/50",
};

export const EventCard = ({ event, index }: EventCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const rules = [
    `Duration: 5-10 minutes per participant/team unless specified otherwise.`,
    `Team size: follow the event's team requirement; unlisted events are solo.`,
    `Judging: decisions by judges are final; respectful conduct is required.`,
    `Props: bring your own small props; organizers are not responsible for valuables.`,
    `Originality: submissions must be original and free of AI generation unless allowed.`,
    `Registration: arrive 15 minutes before your slot; late arrivals may be disqualified.`,
    `Safety: follow all safety instructions from organizers and faculty coordinators.`,
  ];

  const frontStyle: React.CSSProperties = { backfaceVisibility: "hidden" };
  const backStyle: React.CSSProperties = { transform: "rotateY(180deg)", backfaceVisibility: "hidden" };
  const containerStyle: React.CSSProperties = {
    transformStyle: "preserve-3d",
    transition: "transform 500ms",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };
  return (
    <Card
      className={cn(
        "group overflow-hidden border-2 transition-all duration-300 hover:shadow-card hover:-translate-y-1",
        dayBgColors[event.day]
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseLeave={() => setFlipped(false)}
    >
      <div style={{ perspective: 1000 }} className="relative">
        <div style={containerStyle} className="relative">
          {/* Front */}
          <div style={frontStyle} className="relative bg-transparent">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <span className="text-4xl mb-2">{event.icon}</span>
                <Badge variant="outline" className={cn("text-xs", dayColors[event.day])}>
                  Day {event.day}
                </Badge>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {event.name}
              </h3>
            </CardHeader>

            <CardContent className="pb-3">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs font-normal">
                  {event.category}
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs",
                    event.isTeamEvent
                      ? "bg-accent/10 text-accent border-accent/30"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {event.isTeamEvent ? (
                    <><Users className="h-3 w-3 mr-1" /> Team</>
                  ) : (
                    <><User className="h-3 w-3 mr-1" /> Solo</>
                  )}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </CardContent>

            <CardFooter className="pt-0 flex flex-col gap-2">
              <div className="w-full">
                <a
                  href={event.formUrl || `/register-url/?event=${event.id}`}
                  target={event.formUrl ? "_blank" : undefined}
                  rel={event.formUrl ? "noopener noreferrer" : undefined}
                  className="w-full"
                >
                  <Button variant="default" className="w-full group-hover:bg-primary/90">
                    Register for this Event
                  </Button>
                </a>
              </div>
              <div className="w-full">
                <Button variant="ghost" className="w-full" onClick={() => setFlipped(true)}>
                  View Rules & Guidelines
                </Button>
              </div>
            </CardFooter>
          </div>

          {/* Back */}
          <div
            style={Object.assign({}, backStyle, { position: "absolute", inset: 0 })}
            className="bg-background p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-heading font-semibold text-lg text-foreground">Event Rules</h4>
                <p className="text-sm text-muted-foreground">Quick guidelines for {event.name}.</p>
              </div>
              <Badge variant="outline" className={cn("text-xs", dayColors[event.day])}>
                Day {event.day}
              </Badge>
            </div>

            <div className="mt-3 max-h-36 overflow-auto pr-2 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                {rules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
                <li>Judging criteria: creativity, adherence to theme, presentation.</li>
                <li>Disqualification for unsportsmanlike behaviour or unsafe props.</li>
              </ul>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href={event.formUrl || `/register-url/?event=${event.id}`}
                target={event.formUrl ? "_blank" : undefined}
                rel={event.formUrl ? "noopener noreferrer" : undefined}
                className="flex-1"
              >
                <Button variant="primary" className="w-full">Register</Button>
              </a>
              <Button variant="ghost" onClick={() => setFlipped(false)}>Back</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
