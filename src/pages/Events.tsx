import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { pongalEvents, dayInfo } from "@/lib/eventData";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

const Events = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const filteredEvents = selectedDay
    ? pongalEvents.filter((e) => e.day === selectedDay)
    : pongalEvents;

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-cream/20 to-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0 kolam-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 animate-shimmer" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_50%)]" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 text-5xl opacity-20 animate-float">🌾</div>
        <div className="absolute top-32 right-16 text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🏺</div>
        <div className="absolute bottom-20 left-20 text-4xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🎍</div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge with pulse effect */}
            <div className="inline-flex items-center gap-3 bg-white text-maroon px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl animate-bounce-in border-2 border-gold/50 hover:border-gold transition-all duration-300 hover:scale-105 cursor-default">
              <span className="text-2xl animate-pulse">🎉</span>
              <span className="tracking-wide">10 Amazing Events</span>
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            </div>
            
            {/* Main title with gradient */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-shadow-glow animate-slide-in-up leading-tight">
              <span className="bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
                Pongal Events 2026
              </span>
            </h1>
            
            {/* Subtitle with better spacing */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-semibold mb-8 animate-slide-in-up leading-relaxed px-4" style={{ animationDelay: '100ms' }}>
              Explore all 10 exciting events across 3 days of celebration
            </p>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 animate-zoom-in" style={{ animationDelay: '200ms' }}>
              {[
                { label: '3 Days', icon: '📅' },
                { label: '10 Events', icon: '🎪' },
                { label: 'Cultural Heritage', icon: '🎭' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-white/20 px-4 sm:px-6 py-3 rounded-xl border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 group cursor-default"
                >
                  <span className="text-2xl mb-1 block group-hover:scale-110 transition-transform">{stat.icon}</span>
                  <span className="text-white/90 text-xs sm:text-sm font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white/95 border-b-2 border-maroon/10 sticky top-16 z-40 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="text-center mb-4">
            <p className="text-xs sm:text-sm text-maroon/70 font-semibold tracking-wider uppercase">Filter by Day</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Button
              variant={selectedDay === null ? "default" : "outline"}
              onClick={() => setSelectedDay(null)}
              className={cn(
                "min-w-[90px] sm:min-w-[110px] font-bold transition-all duration-300 relative overflow-hidden group hover:shadow-lg border-2 border-maroon/10 rounded-xl",
                selectedDay === null && "shadow-xl hover:shadow-2xl bg-gradient-to-r from-maroon/5 via-cream/10 to-maroon/5"
              )}
            >
              <span className="relative z-10 text-xs sm:text-sm">All Events</span>
              {selectedDay === null && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              )}
              <span className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/10 transition-colors duration-300 rounded-xl" />
            </Button>
            
            {[1, 2, 3].map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "outline"}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "min-w-[110px] sm:min-w-[140px] font-bold transition-all duration-300 relative overflow-hidden group hover:shadow-lg border-2 border-maroon/10 rounded-xl",
                  selectedDay === day && day === 1 && "bg-maroon hover:bg-maroon/90 text-white shadow-xl hover:shadow-2xl border-maroon",
                  selectedDay === day && day === 2 && "bg-maroon-medium hover:bg-maroon-medium/90 text-white shadow-xl hover:shadow-2xl border-maroon-medium",
                  selectedDay === day && day === 3 && "bg-gold text-maroon-dark hover:bg-gold/90 shadow-xl hover:shadow-2xl border-gold",
                  selectedDay !== day && "hover:border-maroon/50 hover:text-maroon"
                )}
              >
                <span className="relative z-10 text-xs sm:text-sm font-extrabold">{dayInfo[day as 1 | 2 | 3].title}</span>
                {selectedDay === day && (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white/50 rounded-full animate-ping" />
                  </>
                )}
                {selectedDay !== day && (
                  <span className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/5 transition-colors duration-300 rounded-xl" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background via-cream/10 to-background flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {selectedDay ? (
            <>
              {/* Selected day header */}
              <div className="mb-12 text-center animate-fade-in">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-maroon/10 via-maroon/5 to-maroon/10 px-8 py-4 rounded-2xl border-2 border-maroon/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={cn(
                    "w-3 h-3 rounded-full animate-pulse",
                    selectedDay === 1 && "bg-maroon",
                    selectedDay === 2 && "bg-maroon-medium",
                    selectedDay === 3 && "bg-gold"
                  )} />
                  <div className="text-left">
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-gradient-pongal">
                      {dayInfo[selectedDay as 1 | 2 | 3].title}
                    </h2>
                    <p className="text-foreground/70 font-medium text-sm md:text-base">
                      {dayInfo[selectedDay as 1 | 2 | 3].subtitle}
                    </p>
                  </div>
                  <div className="ml-auto text-maroon/50 group-hover:text-maroon transition-colors">
                    <span className="text-sm font-semibold">{filteredEvents.length} Events</span>
                  </div>
                </div>
              </div>
              
              {/* Events grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </>
          ) : (
            [1, 2, 3].map((day, idx) => (
              <div key={day} className="mb-20 last:mb-0 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                {/* Day section header with enhanced styling */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4 pb-6 border-b-2 border-gradient-to-r from-transparent via-maroon/20 to-transparent group">
                    <div className="relative">
                      <div
                        className={cn(
                          "w-4 h-16 rounded-full shadow-xl transition-all duration-300 group-hover:scale-110",
                          day === 1 && "bg-gradient-to-b from-maroon-dark to-maroon group-hover:shadow-maroon/50",
                          day === 2 && "bg-gradient-to-b from-maroon to-maroon-medium group-hover:shadow-maroon-medium/50",
                          day === 3 && "bg-gradient-to-b from-gold to-gold-light group-hover:shadow-gold/50"
                        )}
                      />
                      <div className={cn(
                        "absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full animate-pulse",
                        day === 1 && "bg-maroon",
                        day === 2 && "bg-maroon-medium",
                        day === 3 && "bg-gold"
                      )} />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-gradient-pongal mb-2 group-hover:scale-105 transition-transform origin-left">
                        {dayInfo[day as 1 | 2 | 3].title}
                      </h2>
                      <p className="text-foreground/70 font-semibold text-sm md:text-base flex items-center gap-2">
                        <span>{dayInfo[day as 1 | 2 | 3].subtitle}</span>
                        <span className="inline-flex items-center gap-1 bg-maroon/10 px-3 py-1 rounded-full text-xs text-maroon">
                          <span className="w-1.5 h-1.5 rounded-full bg-maroon animate-pulse" />
                          {pongalEvents.filter((e) => e.day === day).length} Events
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Events grid with better spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                  {pongalEvents
                    .filter((e) => e.day === day)
                    .map((event, index) => (
                      <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-maroon to-maroon-dark text-white p-4 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110 group animate-bounce-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Events;
