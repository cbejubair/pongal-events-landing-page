import { Heart, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark text-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 kolam-pattern opacity-20" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full" />
                <span className="text-5xl relative z-10 drop-shadow-2xl">🎍</span>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-3xl bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent leading-tight">Pongal 2026</h3>
                <p className="text-white/80 text-sm font-medium">PPG Institute of Technology</p>
              </div>
            </div>
            <p className="text-white/80 text-base leading-relaxed max-w-md mb-6">
              Celebrating Tamil Culture, Tradition & Talent with three days of vibrant festivities, 
              creative competitions, and traditional games that bring our community together.
            </p>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-gold/30">
                <p className="text-gold font-bold text-sm">Jan 2026</p>
                <p className="text-white/70 text-xs">3 Days</p>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-gold/30">
                <p className="text-gold font-bold text-sm">1:20 - 4:45 PM</p>
                <p className="text-white/70 text-xs">Daily</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/80 hover:text-gold transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-white/80 hover:text-gold transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                  Events
                </a>
              </li>
              <li>
                <a href="/organizers" className="text-white/80 hover:text-gold transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                  Organizers
                </a>
              </li>
              <li>
                <a href="/events" className="text-gold hover:text-gold-light transition-colors flex items-center gap-2 group font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:bg-gold-light transition-colors" />
                  Register Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-gold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">PPG Institute of Technology</p>
                  <p className="text-white/60 text-xs">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/90 text-sm break-all">agrm.jubair2005@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/90 text-sm">+91 8438433361</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm font-medium">
              © 2026 PPG Institute of Technology. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-white/60">Organized by</span>
              <span className="px-3 py-1 bg-gold/20 text-gold rounded-full font-semibold text-xs border border-gold/30">
                Fine Arts Club
              </span>
            </div>
            <p className="flex items-center gap-2 text-sm text-white/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-gold fill-gold animate-pulse" />
              <span>for Tamil Culture</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
