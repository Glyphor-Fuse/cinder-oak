import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-embers.jpg"
          alt="Glowing embers and smoke"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 text-center">
        <p className="font-mono text-primary tracking-[0.2em] mb-4 text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-1000">
          EST. 2024 • WOOD FIRE ONLY
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          PRIMAL <br className="md:hidden" />
          <span className="text-white/80 italic">ELEGANCE</span>
        </h1>
        <p className="max-w-xl mx-auto text-white/70 font-light mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          Where ancient fire meets modern precision. Experience the alchemy of smoke, oak, and time.
        </p>
        
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <Button 
            size="lg" 
            className="rounded-none bg-primary text-primary-foreground hover:bg-white hover:text-black font-mono tracking-widest px-8 py-6 text-xs uppercase border border-primary transition-all duration-300"
          >
            Explore Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}
