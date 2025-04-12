import { getActivities, getLandingActivities } from "@/actions/activityActions";
import { getToken } from "@/actions/decodeToken";
import Community from "@/components/sections/community/Community";
import Hero from "@/components/sections/hero/Hero";
import Offers from "@/components/sections/offers/Offers";
import Services from "@/components/sections/services/Services";
import { JwtPayload } from "jsonwebtoken";

export default async function Home() {
  const data = await getLandingActivities();
  console.log(data.length);
  const token = await getToken();
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }

  const info = data.filter((ele) => ele.deletedAt === null);
  return (
    <main className="font-openSans">
      <Hero data={info} userId={userId} />
      <Services />
      <Offers data={info} userId={userId} />
      <Community />
    </main>
  );
}
