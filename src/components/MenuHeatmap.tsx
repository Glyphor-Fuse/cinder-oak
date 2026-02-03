import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    id: 1,
    title: "A5 Wagyu Brisket",
    description: "Smoked for 16 hours over post oak. Served with bone marrow butter.",
    price: "85",
    image: "/images/beef-marble.jpg", // Reusing for demo, but logically distinct
    tags: ["Oak", "16hr", "Wagyu"]
  },
  {
    id: 2,
    title: "Charred Octopus",
    description: "Flash-seared over open embers. Fermented chili glaze, ash-roasted potatoes.",
    price: "42",
    image: "/images/fire-sear.jpg",
    tags: ["Embers", "Sear", "Spicy"]
  },
  {
    id: 3,
    title: "Heirloom Carrots",
    description: "Roasted in ember beds. Smoked yogurt, dill oil, toasted seeds.",
    price: "28",
    image: "/images/hero-embers.jpg", 
    tags: ["Vegetarian", "Ash", "Local"]
  },
  {
    id: 4,
    title: "Smoked Short Rib",
    description: "Bone-in dinosaur rib. Espresso rub, blackberry gastrique.",
    price: "65",
    image: "/images/wood-oak.jpg",
    tags: ["Espresso", "Bone-in"]
  }
];

export default function MenuHeatmap() {
  const [activeImage, setActiveImage] = useState<string>(menuItems[0].image);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="menu" className="relative min-h-screen flex items-center bg-zinc-950 py-24">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          key={activeImage}
          src={activeImage} 
          alt="Menu Background" 
          className="w-full h-full object-cover opacity-40 animate-in fade-in duration-700 scale-105"
        />
      </div>

      <div className="container relative z-20 px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Header */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">
              Our <span className="text-primary italic">Signature</span> Cuts
            </h2>
            <p className="text-white/60 font-light max-w-md mb-8">
              Hover over the dishes to reveal the fire that forged them. Our menu changes daily based on what the local farms provide.
            </p>
            <div className="hidden lg:block w-32 h-[1px] bg-primary/50" />
          </div>

          {/* Menu List */}
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div 
                key={item.id}
                onMouseEnter={() => {
                  setActiveImage(item.image);
                  setActiveIndex(index);
                }}
                className={cn(
                  "group relative p-6 border-b border-white/10 hover:border-primary/50 transition-all duration-300 cursor-default",
                  activeIndex === index ? "bg-white/5 border-primary/50 pl-8" : "bg-transparent"
                )}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className={cn(
                    "text-2xl font-serif transition-colors duration-300",
                    activeIndex === index ? "text-primary" : "text-white"
                  )}>
                    {item.title}
                  </h3>
                  <span className="font-mono text-primary text-lg">${item.price}</span>
                </div>
                
                <p className="text-muted-foreground font-light text-sm max-w-md mb-4 group-hover:text-white/80 transition-colors">
                  {item.description}
                </p>

                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-white/20 text-white/50 text-[10px] uppercase font-mono tracking-wider rounded-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
