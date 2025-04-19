import { getUserActivities } from "@/actions/getActivities";
import ActivityCard from "../activities/ActivityCard";
import { nanoid } from "nanoid";
import NoData from "../user/NoData";
import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";

export default async function UserActivitiesWrapper({ id }: { id: string }) {
  const token = await getToken();
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }

  const userActivities = await getUserActivities(id);
  return (
    <section className="flex flex-col gap-6 pb-10">
      {userActivities.length !== 0 ? (
        userActivities.map((ele) => (
          <ActivityCard key={nanoid()} details data={ele} userId={userId} />
        ))
      ) : (
        <NoData />
      )}
    </section>
  );
}
