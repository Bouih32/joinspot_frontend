import { getLandingActivities } from "@/actions/activityActions";
import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";
import Offers from "./Offers";

export default async function OfferWrapper() {
  const data = await getLandingActivities();
  const token = await getToken();
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }
  const info = data.filter((ele) => ele.deletedAt === null);
  return <Offers data={info} userId={userId} />;
}
