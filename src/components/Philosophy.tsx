import { Separator } from "@/components/ui/separator";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content - Asymmetrical Width */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">The Process</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                Controlled <span className="italic text-primary">Chaos</span>
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed font-light">
              We believe in the honest complexity of wood fire. No gas, no shortcuts. Just locally sourced white oak, patience, and the finest cuts of meat. Our kitchen is an altar to the flame, where temperature is controlled by instinct and experience.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l border-primary/30 pl-4">
                <p className="font-mono text-2xl text-white mb-1">275°F</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Smoking Point</p>
              </div>
              <div className="border-l border-primary/30 pl-4">
                <p className="font-mono text-2xl text-white mb-1">14 HRS</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Avg. Cook Time</p>
              </div>
            </div>
          </div>

          {/* Image Grid - Asymmetrical */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] translate-y-12">
                <img 
                  src="/images/beef-marble.jpg" 
                  alt="Raw Wagyu Marbling" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 bg-black/80 p-2 border-t border-r border-primary/20">
                  <p className="font-mono text-[10px] text-primary uppercase">Fig 1. Marbling</p>
                </div>
              </div>
              <div className="relative aspect-[3/4]">
                <img 
                  src="/images/smoke-wisps.jpg" 
                  alt="Smoke Texture" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                 <div className="absolute top-0 right-0 bg-black/80 p-2 border-b border-l border-primary/20">
                  <p className="font-mono text-[10px] text-primary uppercase">Fig 2. Oxidation</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Grid Lines */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 opacity-50 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
