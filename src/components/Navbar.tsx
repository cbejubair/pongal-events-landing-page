import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/organizers", label: "Organizers" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Floating Navigation */}
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[95%] max-w-7xl",
          scrolled ? "top-2" : "top-4"
        )}
      >
        <nav
          className={cn(
            "relative rounded-2xl border-2 transition-all duration-500",
            "bg-maroon-dark text-white",
            "border-gold/60",
            "shadow-2xl shadow-maroon/40",
            scrolled && "shadow-2xl shadow-maroon/60 border-gold/80"
          )}
        >
          <div className="flex h-16 md:h-18 items-center justify-between px-4 md:px-6 lg:px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
                <span className="text-3xl md:text-4xl relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  🎍
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent text-lg md:text-xl leading-tight group-hover:scale-105 transition-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Pongal 2026
                </span>
                <span className="text-[10px] text-white leading-tight font-bold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  PPG Institute of Technology
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link key={link.href} to={link.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "relative px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300",
                        "hover:bg-white/10 hover:text-gold",
                        active ? "text-gold bg-white/15 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                      )}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-gold rounded-full animate-pulse" />
                      )}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative h-10 w-10 hover:bg-white/10 text-white hover:text-gold"
              >
                <Menu
                  className={cn(
                    "h-5 w-5 transition-all duration-300",
                    isOpen && "rotate-90 scale-0"
                  )}
                />
                <X
                  className={cn(
                    "h-5 w-5 absolute transition-all duration-300",
                    isOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  )}
                />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {/* Animated Border Gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-50 pointer-events-none" />
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "lg:hidden fixed left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-7xl transition-all duration-500 ease-out",
          isOpen ? "top-[88px] opacity-100 visible" : "top-[60px] opacity-0 invisible"
        )}
      >
        <div
          className={cn(
            "rounded-2xl border-2 bg-maroon-dark text-white shadow-2xl overflow-hidden",
            "border-gold/60",
            "transform transition-all duration-500 origin-top",
            isOpen ? "scale-y-100" : "scale-y-0"
          )}
        >
          {/* Mobile Navigation */}
          <nav className="p-4">
            <div className="space-y-1">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl font-bold transition-all duration-300 group",
                      "hover:bg-white/10",
                      active ? "bg-white/15 text-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    )}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                      transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={cn(
                        "h-5 w-5 transition-all duration-300",
                        active
                          ? "text-gold"
                          : "text-white/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      )}
                    />
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500 z-30",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Spacer to prevent content jump */}
      <div className="h-20 md:h-24" />
    </>
  );
};
