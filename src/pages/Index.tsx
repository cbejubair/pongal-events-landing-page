import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, MapPin, Users, Sparkles, Award } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden pt-16">
        {/* Kolam pattern overlay */}
        <div className="absolute inset-0 kolam-pattern opacity-30" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-80">🌾</div>
        <div className="absolute top-32 right-16 text-5xl animate-float opacity-80" style={{
        animationDelay: '1s'
      }}>🎍</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-float opacity-80" style={{
        animationDelay: '2s'
      }}>🏺</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-float opacity-80" style={{
        animationDelay: '1.5s'
      }}>☀️</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">
            </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-secondary mb-4 animate-fade-in" style={{
            animationDelay: '100ms'
          }}>
              ​PPG PONGAL THIRUVIZHA'26    
              <span className="block text-3xl md:text-4xl mt-2 text-primary-foreground/90">
            </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-heading animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
              Celebrating Tamil Culture, Tradition & Talent
            </p>

            {/* Institution */}
            <p className="text-lg text-primary-foreground/70 mb-8 animate-fade-in" style={{
            animationDelay: '300ms'
          }}>
              PPG Institute of Technology
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
            animationDelay: '400ms'
          }}>
              <Link to="/events">
                <Button variant="hero" size="xl" className="min-w-[200px]">
                  View Events
                </Button>
              </Link>
              <Link to="/register-url/">
                <Button variant="heroOutline" size="xl" className="min-w-[200px]">
                  Register Now
                </Button>
              </Link>
            </div>

            {/* Event Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12animate-fade-in" style={{
            animationDelay: '500ms'
          }}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
                <Calendar className="h-6 w-6 text-secondary mx-auto mb-2" />
                <p className="text-primary-foreground/90 font-medium">3 Days</p>
                <p className="text-primary-foreground/60 text-sm">January 2026</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
                <Clock className="h-6 w-6 text-secondary mx-auto mb-2" />
                <p className="text-primary-foreground/90 font-medium">1:20 PM – 4:45 PM</p>
                <p className="text-primary-foreground/60 text-sm">Daily Schedule</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
                <MapPin className="h-6 w-6 text-secondary mx-auto mb-2" />
                <p className="text-primary-foreground/90 font-medium">PPGIT Campus</p>
                <p className="text-primary-foreground/60 text-sm">Coimbatore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Pongal Section */}
      {/* <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 kolam-pattern opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-5xl mb-4 block">🎉</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What is Pongal?
              </h2>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Pongal is a multi-day Hindu harvest festival celebrated by Tamil people. 
                It marks the beginning of the sun's six-month-long journey northward (Uttarayana) 
                and is a time to express gratitude to nature – the sun, earth, and cattle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The word "Pongal" literally means "overflowing" or "boiling over," signifying 
                abundance and prosperity. The festival is synonymous with traditional rice 
                dishes prepared in clay pots, colorful kolam designs, and joyous celebrations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At PPG Institute of Technology, we celebrate this beautiful festival 
                by organizing cultural events that showcase Tamil heritage, creativity, 
                and the vibrant talents of our students.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Highlights Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three days packed with cultural activities, creative competitions, and traditional games
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Day 1 */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-2 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Day 1: Language & Creativity
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Rangoli, Thirukkural, Tamil poetry, and language challenges
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Award className="h-4 w-4" />
                <span>4 Events</span>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-2 border-accent/20 hover:border-accent/40 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Day 2: Expression & Performance
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                GEN Z Thirukkural, debates, Therukoothu, and poetry writing
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <Award className="h-4 w-4" />
                <span>4 Events</span>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Day 3: Games & Grand Finale
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Pot painting, sack race, tug of war, and the festive Uriadi
              </p>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground">
                <Award className="h-4 w-4" />
                <span>4 Events</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary">12</div>
              <div className="text-muted-foreground">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent">3</div>
              <div className="text-muted-foreground">Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">
              <Users className="h-12 w-12 inline" />
              </div>
              <div className="text-muted-foreground">Countless Memories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 kolam-pattern opacity-20 bg-[sidebar-primary-foreground] bg-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Ready to Participate?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Register now and be part of this grand celebration of Tamil culture!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="heroOutline" size="xl" className="min-w-[180px]">
                  Browse Events
                </Button>
              </Link>
              <Link to="/register-url/">
                <Button variant="hero" size="xl" className="min-w-[180px]">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;