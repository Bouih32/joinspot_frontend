import { getActivities } from "@/actions/activityActions";
import { getToken } from "@/actions/decodeToken";
import Community from "@/components/sections/community/Community";
import Hero from "@/components/sections/hero/Hero";
import Offers from "@/components/sections/offers/Offers";
import Services from "@/components/sections/services/Services";
import { JwtPayload } from "jsonwebtoken";

export default async function Home() {
  const data = await getActivities();
  const token = await getToken();
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }
  return (
    <main className="font-openSans">
      <Hero data={data.activities} userId={userId} />
      <Services />
      <Offers data={data.activities} userId={userId} />
      <Community />
    </main>
  );
}
