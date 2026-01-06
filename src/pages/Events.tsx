import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { pongalEvents, dayInfo } from "@/lib/eventData";
import { cn } from "@/lib/utils";

const Events = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const filteredEvents = selectedDay
    ? pongalEvents.filter((e) => e.day === selectedDay)
    : pongalEvents;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 kolam-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
              Pongal Events 2026
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Explore all 12 exciting events across 3 days of celebration
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/50 border-b border-border sticky top-16 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedDay === null ? "default" : "outline"}
              onClick={() => setSelectedDay(null)}
              className="min-w-[100px]"
            >
              All Events
            </Button>
            {[1, 2, 3].map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "outline"}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "min-w-[140px]",
                  selectedDay === day && day === 1 && "bg-primary",
                  selectedDay === day && day === 2 && "bg-accent text-accent-foreground",
                  selectedDay === day && day === 3 && "bg-secondary text-secondary-foreground"
                )}
              >
                {dayInfo[day as 1 | 2 | 3].title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-background flex-1">
        <div className="container mx-auto px-4">
          {selectedDay ? (
            <div className="mb-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {dayInfo[selectedDay as 1 | 2 | 3].title} – {dayInfo[selectedDay as 1 | 2 | 3].subtitle}
              </h2>
            </div>
          ) : (
            [1, 2, 3].map((day) => (
              <div key={day} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={cn(
                      "w-2 h-10 rounded-full",
                      day === 1 && "bg-primary",
                      day === 2 && "bg-accent",
                      day === 3 && "bg-secondary"
                    )}
                  />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      {dayInfo[day as 1 | 2 | 3].title}
                    </h2>
                    <p className="text-muted-foreground">
                      {dayInfo[day as 1 | 2 | 3].subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pongalEvents
                    .filter((e) => e.day === day)
                    .map((event, index) => (
                      <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>
              </div>
            ))
          )}

          {selectedDay && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
