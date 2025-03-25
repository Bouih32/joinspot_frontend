import { getActivities } from "@/actions/getActivities";
import Community from "@/components/sections/community/Community";
import Hero from "@/components/sections/hero/Hero";
import Offers from "@/components/sections/offers/Offers";
import Services from "@/components/sections/services/Services";

export default async function Home() {
  const data = await getActivities();
  return (
    <main className="font-openSans">
      <Hero data={data.activities} />
      <Services />
      <Offers data={data.activities} />
      <Community />
    </main>
  );
}
