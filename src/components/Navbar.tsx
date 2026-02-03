import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Menu", href: "#menu" },
    { name: "Reservations", href: "#reservations" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif tracking-widest text-primary font-bold">
          CINDER & OAK
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono tracking-widest text-foreground/80 hover:text-primary transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-none">
            Book Table
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-white/10 py-8 flex flex-col items-center space-y-6 md:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-48 bg-primary text-primary-foreground rounded-none font-mono">
            Book Table
          </Button>
        </div>
      )}
    </nav>
  );
}
