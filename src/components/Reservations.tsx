import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Reservations() {
  return (
    <section id="reservations" className="py-24 bg-background relative border-t border-white/5">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">Secure Your Table</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Join The <span className="italic text-primary">Feast</span>
          </h2>
        </div>

        <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Date</label>
                <Input type="date" className="bg-transparent border-white/20 text-white rounded-none focus:ring-primary focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Guests</label>
                <Select>
                  <SelectTrigger className="bg-transparent border-white/20 text-white rounded-none focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-none">
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="6">6 Guests</SelectItem>
                    <SelectItem value="8">8+ (Large Party)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Name</label>
                <Input placeholder="John Doe" className="bg-transparent border-white/20 text-white rounded-none focus:ring-primary focus:border-primary placeholder:text-white/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-transparent border-white/20 text-white rounded-none focus:ring-primary focus:border-primary placeholder:text-white/20" />
              </div>
            </div>

            <div className="pt-6">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none py-6 font-mono tracking-widest uppercase transition-all">
                Confirm Reservation
              </Button>
            </div>
            
            <p className="text-center text-xs text-muted-foreground font-mono mt-4">
              *For parties larger than 8, please contact us directly at <span className="text-primary">events@cinderandoak.com</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
