import { getLandingActivities } from "@/actions/activityActions";
import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";
import Hero from "./Hero";

export default async function HeroWrapper({
  params,
}: {
  params: {
    city: string;
    category: string;
  };
}) {
  const data = await getLandingActivities(params);
  const token = await getToken();
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }
  const info = data.filter((ele) => ele.deletedAt === null);
  return <Hero data={info} userId={userId} />;
}
