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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎍</span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-primary text-lg leading-tight">
                Pongal 2026
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                PPG Institute of Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-foreground/80 hover:text-foreground",
                    location.pathname === link.href &&
                      "bg-primary/10 text-primary font-semibold"
                  )}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/register-url/">
              <Button variant="hero" size="sm" className="ml-2">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                      "w-full justify-start text-foreground/80",
                      location.pathname === link.href &&
                        "bg-primary/10 text-primary font-semibold"
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
