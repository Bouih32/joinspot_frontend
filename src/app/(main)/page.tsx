import { getActivities } from "@/actions/activityActions";
import Community from "@/components/sections/community/Community";
import Hero from "@/components/sections/hero/Hero";
import Offers from "@/components/sections/offers/Offers";
import Services from "@/components/sections/services/Services";
import { revalidate } from "@/libs/constantes";
import { unstable_cache } from "next/cache";

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
