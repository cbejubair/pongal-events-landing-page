import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, User, RotateCcw, ExternalLink, ChevronRight, ScrollText } from "lucide-react";
import { PongalEvent } from "@/lib/eventData";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: PongalEvent;
  index: number;
}

const dayColors = {
  1: {
    badge: "bg-maroon/10 text-maroon border-maroon/30",
    border: "border-maroon/20 hover:border-maroon/60",
    accent: "from-maroon to-maroon-dark",
    glow: "hover:shadow-maroon/20",
    text: "text-maroon",
    bg: "bg-maroon",
  },
  2: {
    badge: "bg-maroon-medium/10 text-maroon-medium border-maroon-medium/30",
    border: "border-maroon-medium/20 hover:border-maroon-medium/60",
    accent: "from-maroon-medium to-maroon",
    glow: "hover:shadow-maroon-medium/20",
    text: "text-maroon-medium",
    bg: "bg-maroon-medium",
  },
  3: {
    badge: "bg-gold/10 text-gold border-gold/30",
    border: "border-gold/20 hover:border-gold/60",
    accent: "from-gold to-gold-light",
    glow: "hover:shadow-gold/20",
    text: "text-gold",
    bg: "bg-gold",
  },
};

export const EventCard = ({ event, index }: EventCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const colors = dayColors[event.day];

  const defaultRules = [
    "Arrive 15 minutes before your slot",
    "Follow all safety instructions",
    "Judges' decisions are final",
    "Respectful conduct required",
  ];

  const rules = event.rules || defaultRules;

  return (
    <div
      className="perspective-1000 h-[420px] animate-zoom-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={cn(
          "relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Front of Card */}
        <Card
          className={cn(
            "absolute inset-0 w-full h-full border-2 overflow-hidden group",
            "bg-gradient-to-br from-card via-card to-cream/30",
            "shadow-lg hover:shadow-2xl transition-all duration-500",
            colors.border,
            colors.glow
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Decorative top accent */}
          <div className={cn("absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r", colors.accent)} />
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="p-5 h-full flex flex-col relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full scale-150" />
                <span className="text-5xl relative z-10 drop-shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300 block">
                  {event.icon}
                </span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge variant="outline" className={cn("text-xs font-bold shadow-sm px-3 py-1", colors.badge)}>
                  Day {event.day}
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs font-semibold",
                    event.isTeamEvent
                      ? "bg-gold/10 text-gold border-gold/40"
                      : "bg-muted text-muted-foreground border-muted-foreground/30"
                  )}
                >
                  {event.isTeamEvent ? (
                    <><Users className="h-3 w-3 mr-1" /> Team</>
                  ) : (
                    <><User className="h-3 w-3 mr-1" /> Solo</>
                  )}
                </Badge>
              </div>
            </div>

            {/* Title */}
            <h3 className={cn(
              "font-heading font-bold text-xl mb-2 leading-tight transition-colors duration-300",
              "text-foreground group-hover:" + colors.text
            )}>
              {event.name}
            </h3>

            {/* Category */}
            <Badge variant="secondary" className="text-xs font-semibold shadow-sm w-fit mb-3">
              {event.category}
            </Badge>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
              {event.description}
            </p>

            {/* Actions */}
            <div className="mt-4 space-y-2">
              {event.formUrl ? (
                <a
                  href={event.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button 
                    className={cn(
                      "w-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300",
                      "bg-gradient-to-r text-white hover:scale-[1.02]",
                      colors.accent
                    )}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Register Now
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              ) : (
                <Button 
                  variant="secondary" 
                  className="w-full font-semibold text-sm"
                  disabled
                >
                  Registration Coming Soon
                </Button>
              )}
              
              <Button
                variant="ghost"
                className={cn(
                  "w-full font-semibold text-sm border border-dashed",
                  "hover:bg-maroon/5 hover:border-maroon/30",
                  colors.border
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
              >
                <ScrollText className="h-4 w-4 mr-2" />
                View Rules & Guidelines
              </Button>
            </div>
          </div>
        </Card>

        {/* Back of Card - Rules */}
        <Card
          className={cn(
            "absolute inset-0 w-full h-full border-2",
            "bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark",
            "shadow-2xl",
            colors.border
          )}
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 kolam-pattern opacity-10" />
          
          {/* Golden accent line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />

          <div className="p-5 h-full flex flex-col relative z-10 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                  <ScrollText className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Event Rules</h4>
                  <p className="text-xs text-white/70">{event.name}</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-gold/20 text-gold border-gold/40 text-xs font-bold">
                Day {event.day}
              </Badge>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-3" />

            {/* Rules List */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0 mb-3">
              <ul className="space-y-2.5 pb-2">
                {rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-3" />

            {/* Actions */}
            <div className="flex-shrink-0 space-y-2">
              {event.formUrl ? (
                <a
                  href={event.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button 
                    className="w-full font-bold text-sm bg-gold hover:bg-gold-light text-maroon-dark shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Register for Event
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </a>
              ) : (
                <Button 
                  variant="secondary" 
                  className="w-full font-semibold text-sm bg-white/10 text-white hover:bg-white/20"
                  disabled
                >
                  Registration Coming Soon
                </Button>
              )}
              
              <Button
                variant="ghost"
                className="w-full font-semibold text-sm text-white/90 hover:text-white hover:bg-white/10 border border-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Back to Event Details
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
