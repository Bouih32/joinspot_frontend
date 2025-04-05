import { getToken } from "@/actions/decodeToken";
import { getUserActivities } from "@/actions/getActivities";
import { JwtPayload } from "jsonwebtoken";
import React from "react";
import ActivityCard from "./ActivityCard";
import { nanoid } from "nanoid";
import NoActivities from "./NoActivities";
import { unstable_cache } from "next/cache";
import { revalidate } from "@/libs/constantes";

export default async function UserActivities({
  params,
}: {
  params: {
    seats: string;
    category: string;
    date: string;
    my: string;
    search: string;
  };
}) {
  const token = await getToken();
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }

  if (!userId) return;

  const cachedUserActivities = unstable_cache(
    async () => {
      const userActivities = await getUserActivities(userId);
      return userActivities;
    },
    [userId, "activities"],
    { tags: [userId, "activities"], revalidate: revalidate },
  );

  const userActivities = await cachedUserActivities();
  return (
    <div className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
      {!userActivities || userActivities.length === 0 ? (
        <NoActivities token={token} params={params} />
      ) : (
        userActivities.map((ele) => (
          <ActivityCard key={nanoid()} full data={ele} />
        ))
      )}
    </div>
  );
}
