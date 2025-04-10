import Container from "@/components/Container";
import React from "react";
import Overview from "@/components/activities/details/Overview";
import Description from "@/components/activities/details/Description";
import Ratings from "@/components/activities/details/Ratings";
import JoinSection from "@/components/activities/details/JoinSection";
import Button from "@/components/Button";
import {
  getActivityById,
  getActivityReviews,
  getUserActivities,
} from "@/actions/getActivities";

import { getToken } from "@/actions/decodeToken";
import ActivityCard from "@/components/activities/ActivityCard";
import { nanoid } from "nanoid";
import Success from "@/components/activities/add/Success";
import Link from "next/link";
import { JwtPayload } from "jsonwebtoken";
import EditCTA from "@/components/activities/edit/EditCTA";
import WhoJoined from "@/components/activities/edit/WhoJoined";

export default async function ActivityDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const token = await getToken();
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }

  const reviews = await getActivityReviews(id);
  const activity = await getActivityById(id);
  const userActivities = await getUserActivities(activity.userId);

  const filtredActivities = userActivities.filter(
    (ele) => ele.activityId !== id,
  );

  return (
    <main className="space-y-6">
      {userId === activity.userId && <EditCTA id={activity.activityId} />}

      <section className="space-y-10">
        <Container classname="tablet:border laptop:p-[25px] space-y-3 tablet:space-y-5  tablet:p-4 border-secondLightActive rounded-xl tablet:mt-10 mt-[25px]">
          <Success review />

          <Overview activity={activity} userId={userId} />
          <Description description={activity.description} />
          {userId !== activity.userId && (
            <>
              <Ratings
                score={activity.score}
                token={token}
                id={activity.activityId}
                reviews={reviews}
              />
              {activity.seat !== activity.joined && (
                <JoinSection activity={activity} />
              )}
            </>
          )}
        </Container>

        {userId !== activity.userId && filtredActivities.length > 0 && (
          <Container>
            <section className="pb-10">
              <div className="flexBetween flex-col gap-4 tablet:flex-row">
                <div className="">
                  <h3 className="text-16xxl text-main laptop:text-26xxl">
                    Reviews & Ratings
                  </h3>
                  <p className="text-12sm text-darker tablet:text-14sm laptop:text-16sm">
                    Join <span className="font-bold">{activity.userName}</span>{" "}
                    for more unforgettable experiences. Spots fill up
                    fast—reserve your next adventure today!
                  </p>
                </div>
                <Link href="/activities" className="self-end">
                  <Button secondary>See more</Button>
                </Link>
              </div>
              <section className="mt-10 flex flex-col gap-6">
                {filtredActivities.map((ele) => (
                  <ActivityCard
                    key={nanoid()}
                    details
                    data={ele}
                    userId={userId}
                  />
                ))}
              </section>
            </section>
          </Container>
        )}
      </section>
      {userId === activity.userId && <WhoJoined id={activity.activityId} />}
    </main>
  );
}
