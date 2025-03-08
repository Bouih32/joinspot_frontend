import Hero from "@/components/sections/hero/Hero";
import Offers from "@/components/sections/offers/Offers";
import Services from "@/components/sections/services/Services";

export default function Home() {
  return (
    <main className="font-openSans">
      <Hero />
      <Services />
      <Offers />
    </main>
  );
}
