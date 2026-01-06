import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  // { href: "/register", label: "Register" },
  { href: "/organizers", label: "Organizers" },
  // { href: "/admin", label: "Admin" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-maroon-dark/95 via-maroon/95 to-maroon-dark/95 backdrop-blur-xl border-b border-gold/30 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
              <span className="text-4xl relative z-10 drop-shadow-lg animate-bounce-gentle">🎍</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent text-xl leading-tight group-hover:scale-105 transition-transform animate-shimmer">
                Pongal 2026
              </span>
              <span className="text-[10px] text-white/90 leading-tight font-semibold tracking-wide">
                PPG Institute of Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-white/90 hover:text-gold hover:bg-white/10 font-semibold transition-all relative group",
                    location.pathname === link.href &&
                      "text-gold bg-white/15 font-bold"
                  )}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gold rounded-full" />
                  )}
                </Button>
              </Link>
            ))}
            <Link to="/register-url/">
              <Button variant="festive" size="sm" className="ml-2 font-bold shadow-lg hover:shadow-gold transition-all">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10 hover:text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-foreground/80 hover:text-primary font-semibold",
                      location.pathname === link.href &&
                        "bg-gradient-to-r from-maroon/15 to-secondary/15 text-primary border-l-4 border-maroon font-bold"
                    )}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link to="/register-url/" onClick={() => setIsOpen(false)}>
                <Button variant="hero" className="w-full mt-2">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
