import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import MenuHeatmap from "@/components/MenuHeatmap";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Philosophy />
      <MenuHeatmap />
      <Reservations />
      <Footer />
    </main>
  );
}
