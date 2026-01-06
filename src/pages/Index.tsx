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
        <div className="absolute inset-0 kolam-pattern opacity-40" />
        
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
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-maroon-dark px-5 py-2.5 rounded-full mb-6 shadow-lg animate-bounce-in border-2 border-gold">
              <Sparkles className="h-5 w-5 text-gold animate-pulse" />
              <span className="text-sm font-bold tracking-wide">
                தமிழ் திருவிழா 2026
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 animate-slide-in-up text-shadow-glow hero-text-responsive" style={{
            animationDelay: '100ms'
          }}>
              PPG PONGAL THIRUVIZHA'26    
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-3 text-gold-light animate-shimmer">
                பொங்கல் திருவிழா
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-4 font-heading font-semibold animate-slide-in-up text-shadow-glow" style={{
            animationDelay: '200ms'
          }}>
              Celebrating Tamil Culture, Tradition & Talent
            </p>

            {/* Institution */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-medium animate-slide-in-up" style={{
            animationDelay: '300ms'
          }}>
              PPG Institute of Technology
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-zoom-in" style={{
            animationDelay: '400ms'
          }}>
              <Link to="/events">
                <Button variant="hero" size="xl" className="min-w-[200px] text-base sm:text-lg font-extrabold">
                  View Events
                </Button>
              </Link>
              <Link to="/events">
                <Button 
                  variant="heroOutline" 
                  size="xl" 
                  className="min-w-[200px] text-base sm:text-lg font-extrabold bg-white text-maroon-dark border-4 border-gold hover:bg-gold hover:text-white shadow-2xl hover:shadow-gold/50 transition-all duration-300"
                >
                  Register Now
                </Button>
              </Link>
            </div>

            {/* Event Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 animate-slide-in-up" style={{
            animationDelay: '500ms'
          }}>
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 border-3 border-gold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Calendar className="h-7 w-7 text-maroon mx-auto mb-2" />
                <p className="text-maroon-dark font-bold text-lg">3 Days</p>
                <p className="text-foreground/70 text-sm font-semibold">January 2026</p>
              </div>
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 border-3 border-gold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Clock className="h-7 w-7 text-maroon mx-auto mb-2" />
                <p className="text-maroon-dark font-bold text-lg">1:20 PM – 4:45 PM</p>
                <p className="text-foreground/70 text-sm font-semibold">Daily Schedule</p>
              </div>
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 border-3 border-gold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <MapPin className="h-7 w-7 text-maroon mx-auto mb-2" />
                <p className="text-maroon-dark font-bold text-lg">PPGIT Campus</p>
                <p className="text-foreground/70 text-sm font-semibold">Coimbatore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-3 border-white/80 flex items-start justify-center p-1 shadow-lg">
            <div className="w-1.5 h-3 bg-white/90 rounded-full animate-pulse" />
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
      <section className="py-20 bg-gradient-to-b from-background to-cream/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gradient-pongal mb-4">
              Event Highlights
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto font-semibold">
              Experience three spectacular days celebrating Tamil heritage through artistic expression, 
              cultural performances, and traditional festivities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Day 1 */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-3 border-maroon/30 hover:border-maroon hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center mb-4 shadow-lg">
                <span className="text-4xl">✍️</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-maroon mb-2">
                Day 1: Language & Creativity
              </h3>
              <p className="text-foreground/70 text-base mb-4 font-medium">
                Celebrate the beauty of Tamil language through vibrant Rangoli art, timeless Thirukkural wisdom, 
                soulful poetry, and engaging linguistic challenges
              </p>
              <div className="flex items-center gap-2 text-sm text-maroon font-bold">
                <Award className="h-5 w-5" />
                <span>4 Events</span>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-3 border-maroon-medium/30 hover:border-maroon-medium hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-maroon-medium to-maroon-light flex items-center justify-center mb-4 shadow-lg">
                <span className="text-4xl">🎭</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-maroon-medium mb-2">
                Day 2: Expression & Performance
              </h3>
              <p className="text-foreground/70 text-base mb-4 font-medium">
                Witness modern interpretations with GEN Z Thirukkural, engaging debates, traditional 
                Therukoothu street theater, and creative poetry composition
              </p>
              <div className="flex items-center gap-2 text-sm text-maroon-medium font-bold">
                <Award className="h-5 w-5" />
                <span>4 Events</span>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-3 border-accent/30 hover:border-accent hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-gold flex items-center justify-center mb-4 shadow-lg">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-accent mb-2">
                Day 3: Games & Grand Finale
              </h3>
              <p className="text-foreground/70 text-base mb-4 font-medium">
                Experience traditional games including artistic pot painting, energetic sack races, 
                thrilling tug of war, and the exciting Uriadi finale
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-bold">
                <Award className="h-5 w-5" />
                <span>4 Events</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-heading font-extrabold text-gradient-pongal">12</div>
              <div className="text-foreground/70 font-semibold text-lg mt-1">Events</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-heading font-extrabold text-gradient-pongal">3</div>
              <div className="text-foreground/70 font-semibold text-lg mt-1">Days</div>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto text-maroon mb-2" />
              <div className="text-foreground/70 font-semibold text-lg">Countless Memories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 kolam-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 text-shadow-glow">
              Ready to Participate?
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-8 font-semibold">
              Register now and be part of this grand celebration of Tamil culture!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="heroOutline" size="xl" className="min-w-[180px] bg-white/10 hover:bg-white/5 backdrop-blur-sm border-white text-white hover:text-white font-extrabold">
                  Browse Events
                </Button>
              </Link>
              <Link to="/events">
                <Button 
                  size="xl" 
                  className="min-w-[180px] bg-white text-maroon-dark border-4 border-gold hover:bg-gold hover:text-white shadow-2xl hover:shadow-gold/50 transition-all duration-300 font-extrabold"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-20 bg-gradient-to-b from-background via-maroon/5 to-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gradient-pongal mb-4">
              Why Participate?
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto font-semibold">
              Join us in this grand celebration and create unforgettable memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Cultural Heritage */}
            <div className="bg-gradient-to-br from-card to-cream/30 rounded-2xl p-6 border-2 border-maroon/20 hover:border-maroon transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center mb-4 mx-auto shadow-lg">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-maroon mb-3 text-center">
                Cultural Heritage
              </h3>
              <p className="text-foreground/70 text-sm text-center leading-relaxed">
                Connect with Tamil traditions and celebrate the rich cultural heritage through authentic festivities
              </p>
            </div>

            {/* Showcase Talent */}
            <div className="bg-gradient-to-br from-card to-cream/30 rounded-2xl p-6 border-2 border-maroon/20 hover:border-maroon transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-maroon-medium to-gold flex items-center justify-center mb-4 mx-auto shadow-lg">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-maroon-medium mb-3 text-center">
                Showcase Talent
              </h3>
              <p className="text-foreground/70 text-sm text-center leading-relaxed">
                Display your artistic abilities, language skills, and creative expression on a grand platform
              </p>
            </div>

            {/* Win Prizes */}
            <div className="bg-gradient-to-br from-card to-cream/30 rounded-2xl p-6 border-2 border-maroon/20 hover:border-maroon transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-4 mx-auto shadow-lg">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-accent mb-3 text-center">
                Win Prizes
              </h3>
              <p className="text-foreground/70 text-sm text-center leading-relaxed">
                Compete in exciting events and win attractive prizes, certificates, and recognition
              </p>
            </div>

            {/* Build Connections */}
            <div className="bg-gradient-to-br from-card to-cream/30 rounded-2xl p-6 border-2 border-maroon/20 hover:border-maroon transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-maroon-dark to-maroon flex items-center justify-center mb-4 mx-auto shadow-lg">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-maroon-dark mb-3 text-center">
                Build Connections
              </h3>
              <p className="text-foreground/70 text-sm text-center leading-relaxed">
                Network with fellow students, share experiences, and create lasting friendships
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link to="/events">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-maroon via-maroon-medium to-maroon text-white border-2 border-gold hover:border-gold-light shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg px-8"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;