import { Heart, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎍</span>
              <h3 className="font-heading font-bold text-xl">Pongal 2026</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Celebrating Tamil Culture, Tradition & Talent at PPG Institute of Technology.
              Join us for three days of cultural festivities!
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>PPG Institute of Technology, Coimbatore</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>agrm.jubair2005@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 8438433361</span>
              </div>
            </div>
          </div>

          {/* Committee */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Pongal Celebration 
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Organized by the Fine Arts Club of PPG Institute of Technology
            </p>
            <div className="flex items-center gap-2 text-sm text-secondary">
              <span>Time: 1:20 PM – 4:45 PM</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>© 2026 PPG Institute of Technology. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-secondary fill-secondary" /> for Pongal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
