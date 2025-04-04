import { getActivities } from "@/actions/getActivities";
import Community from "@/components/sections/community/Community";
import Hero from "@/components/sections/hero/Hero";
import Offers from "@/components/sections/offers/Offers";
import Services from "@/components/sections/services/Services";
import { unstable_cache } from "next/cache";
import { cookies } from "next/headers";

export default async function Home() {
  const cookiesStore = await cookies();
  const cookiesToken = cookiesStore.get("token");
  const getCashedActivities = unstable_cache(
    async () => {
      const data = await getActivities(cookiesToken);
      return data;
    },
    ["landing_activities"],
    { tags: ["landing_activities", "activities"], revalidate: false },
  );
  const data = await getCashedActivities();
  return (
    <main className="font-openSans">
      <Hero data={data.activities} />
      <Services />
      <Offers data={data.activities} />
      <Community />
    </main>
  );
}
