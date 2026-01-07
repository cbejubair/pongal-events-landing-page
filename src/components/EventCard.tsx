import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Users, User, ExternalLink, ChevronRight, ScrollText, Clock, CheckCircle2, Sparkles, Copy, Check, X } from "lucide-react";
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
    team: "bg-gold/10 text-gold border-gold/40",
  },
  2: {
    badge: "bg-maroon-medium/10 text-maroon-medium border-maroon-medium/30",
    border: "border-maroon-medium/20 hover:border-maroon-medium/60",
    accent: "from-maroon-medium to-maroon",
    glow: "hover:shadow-maroon-medium/20",
    text: "text-maroon-medium",
    bg: "bg-maroon-medium",
    team: "bg-gold/10 text-gold border-gold/40",
  },
  3: {
    badge: "bg-maroon-medium/10 text-maroon-medium border-maroon-medium/30",
    border: "border-maroon-medium/20 hover:border-maroon-medium/60",
    accent: "from-maroon-medium to-maroon",
    glow: "hover:shadow-maroon-medium/20",
    text: "text-maroon-medium",
    bg: "bg-maroon-medium",
    team: "bg-gold/10 text-gold border-gold/40",
  },
};

export const EventCard = ({ event, index }: EventCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hoveredRule, setHoveredRule] = useState<number | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const rulesContainerRef = useRef<HTMLDivElement>(null);
  const colors = dayColors[event.day];

  const defaultRules = [
    "Arrive 15 minutes before your slot",
    "Follow all safety instructions",
    "Judges' decisions are final",
    "Respectful conduct required",
  ];

  const rules = event.rules || defaultRules;

  // Check if rules container is scrollable
  useEffect(() => {
    if (isDialogOpen && rulesContainerRef.current) {
      const { scrollHeight, clientHeight } = rulesContainerRef.current;
      setShowScrollHint(scrollHeight > clientHeight + 10);
    }
  }, [isDialogOpen, rules]);

  // Copy rules to clipboard
  const handleCopyRules = async () => {
    const rulesText = rules.map((rule, i) => `${i + 1}. ${rule}`).join('\n');
    const fullText = `${event.name} - Event Rules\n\n${rulesText}`;
    
    try {
      await navigator.clipboard.writeText(fullText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy rules:', err);
    }
  };

  return (
    <>
      <Card
        className={cn(
          "h-[420px] border-2 overflow-hidden group animate-zoom-in",
          "bg-gradient-to-br from-card via-card to-cream/30",
          "shadow-lg hover:shadow-2xl transition-all duration-500",
          colors.border,
          colors.glow
        )}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {/* Decorative top accent */}
        <div className={cn("absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r", colors.accent)} />
        
        {/* Animated glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0)_1px,_transparent_0)] bg-[length:24px_24px]" />

        <div className="p-5 h-full flex flex-col relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="relative group/icon">
              <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full scale-150 group-hover/icon:scale-175 transition-transform duration-300" />
              <span className="text-5xl relative z-10 drop-shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300 block">
                {event.icon}
              </span>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Badge variant="outline" className={cn("text-xs font-bold shadow-sm px-3 py-1 transition-transform hover:scale-105", colors.badge)}>
                Day {event.day}
              </Badge>
              <Badge
                variant="outline"
                className={cn(
                  "text-xs font-semibold transition-all duration-300",
                  event.isTeamEvent
                    ? "bg-gold/10 text-gold border-gold/40 hover:bg-gold/20 hover:scale-105"
                    : "bg-muted text-muted-foreground border-muted-foreground/30 hover:scale-105"
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
            "font-heading font-bold text-xl mb-2 leading-tight transition-all duration-300",
            "text-foreground group-hover:" + colors.text,
            "group-hover:translate-x-0.5"
          )}>
            {event.name}
          </h3>

          {/* Category */}
          <Badge variant="secondary" className="text-xs font-semibold shadow-sm w-fit mb-3 hover:shadow-md transition-shadow">
            {event.category}
          </Badge>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow group-hover:text-foreground/80 transition-colors">
            {event.description}
          </p>

          {/* Actions */}
          <div className="flex-shrink-0 space-y-2 mt-4">
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
                    "w-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group/btn",
                    "bg-gradient-to-r text-white hover:scale-[1.02]",
                    colors.accent
                  )}
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Register Now
                  <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            ) : (
              <Button 
                variant="secondary" 
                className="w-full font-semibold text-sm opacity-60"
                disabled
              >
                <Clock className="h-4 w-4 mr-2" />
                Registration Coming Soon
              </Button>
            )}
            
            <Button
              variant="ghost"
              className={cn(
                "w-full font-semibold text-sm border border-dashed group/rules",
                "hover:bg-maroon/5 hover:border-maroon/30 transition-all duration-300",
                colors.border
              )}
              onClick={() => setIsDialogOpen(true)}
            >
              <ScrollText className="h-4 w-4 mr-2 group-hover/rules:rotate-12 transition-transform" />
              View Rules & Guidelines
              <Sparkles className="h-3 w-3 ml-1 text-gold opacity-0 group-hover/rules:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Rules Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className={cn(
          "max-w-2xl max-h-[90vh] overflow-hidden p-0 gap-0 border-2",
          "bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark",
          colors.border
        )}>
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 kolam-pattern opacity-10" />
          
          {/* Animated gradient shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-shimmer" 
               style={{ 
                 backgroundSize: '200% 100%',
                 animation: 'shimmer 3s ease-in-out infinite'
               }} 
          />
          
          {/* Golden accent lines - top and bottom */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold shadow-lg shadow-gold/50" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/50 via-gold-light/50 to-gold/50" />

          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />

          <div className="relative z-10 flex flex-col max-h-[90vh]">
            {/* Header - Fixed */}
            <DialogHeader className="p-5 pb-3 space-y-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center border border-gold/30 shadow-lg shadow-gold/20 backdrop-blur-sm">
                    <ScrollText className="h-5 w-5 text-gold animate-pulse" />
                  </div>
                  <div>
                    <DialogTitle className="font-heading font-bold text-lg text-white drop-shadow-lg">
                      Event Rules
                    </DialogTitle>
                    <p className="text-xs text-white/70 font-medium">{event.name}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <Badge variant="outline" className="bg-gold/20 text-gold border-gold/40 text-xs font-bold shadow-md">
                    Day {event.day}
                  </Badge>
                  {event.isTeamEvent && (
                    <Badge variant="outline" className="bg-white/10 text-white border-white/30 text-xs font-semibold">
                      <Users className="h-3 w-3 mr-1" /> Team Event
                    </Badge>
                  )}
                </div>
              </div>

              {/* Divider with sparkle effect */}
              <div className="relative h-px">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-gold animate-pulse" />
              </div>
            </DialogHeader>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-5 py-3 min-h-0">
              {/* Rules count indicator */}
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-white/90">
                  {rules.length} Important {rules.length === 1 ? 'Rule' : 'Rules'} to Follow
                </span>
              </div>

              {/* Rules List with enhanced styling */}
              <div 
                ref={rulesContainerRef}
                className="scroll-smooth"
              >
                <ul className="space-y-3 pb-2">
                  {rules.map((rule, i) => (
                    <li 
                      key={i} 
                      className={cn(
                        "flex items-start gap-3 text-sm text-white/90 p-2.5 rounded-lg transition-all duration-300",
                        "hover:bg-white/10 hover:scale-[1.02] cursor-default",
                        hoveredRule === i && "bg-white/10 shadow-lg"
                      )}
                      onMouseEnter={() => setHoveredRule(i)}
                      onMouseLeave={() => setHoveredRule(null)}
                    >
                      <span className={cn(
                        "flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 transition-all duration-300 shadow-md",
                        hoveredRule === i 
                          ? "bg-gold text-maroon-dark scale-110" 
                          : "bg-gold/20 text-gold"
                      )}>
                        {i + 1}
                      </span>
                      <span className="leading-relaxed font-medium">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer - Fixed */}
            <div className="p-5 pt-3 space-y-3">
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              {/* Quick Info Section */}
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="h-3.5 w-3.5 text-gold" />
                    <span className="font-medium">Read carefully before registering</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-7 px-2 text-xs font-semibold hover:bg-white/10 transition-all duration-300",
                      isCopied ? "text-green-400" : "text-white/70 hover:text-white"
                    )}
                    onClick={handleCopyRules}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3 w-3 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" />
                        Copy Rules
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                {event.formUrl ? (
                  <a
                    href={event.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      className="w-full font-bold text-sm bg-gold hover:bg-gold-light text-maroon-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Register for Event
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                ) : (
                  <Button 
                    variant="secondary" 
                    className="w-full font-semibold text-sm bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    disabled
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Registration Coming Soon
                  </Button>
                )}
                
                <Button
                  variant="ghost"
                  className="w-full font-semibold text-sm text-white/90 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <X className="h-4 w-4 mr-2" />
                  Close
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
