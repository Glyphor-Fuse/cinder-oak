import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-serif font-bold text-primary tracking-widest block mb-6">
              CINDER & OAK
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Primal cooking methods, refined execution. A tribute to the art of fire and smoke.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-mono text-primary text-sm uppercase tracking-widest mb-6">Location</h4>
            <p className="text-sm text-muted-foreground mb-2">850 Charcoal Ave</p>
            <p className="text-sm text-muted-foreground">Chicago, IL 60607</p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-mono text-primary text-sm uppercase tracking-widest mb-6">Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Tue - Thu</span>
                <span>5pm - 10pm</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Fri - Sat</span>
                <span>5pm - 11pm</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Sun</span>
                <span>4pm - 9pm</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-mono text-primary text-sm uppercase tracking-widest mb-6">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors rounded-none">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors rounded-none">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors rounded-none">
                <Twitter size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-mono">
          <p>© 2024 Cinder & Oak. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
