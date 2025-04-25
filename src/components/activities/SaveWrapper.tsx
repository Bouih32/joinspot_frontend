"use client";

import { useContext } from "react";
import ActivityCard, { ActivityCardType } from "./ActivityCard";
import { nanoid } from "nanoid";
import Image from "next/image";
import { SaveContext } from "@/contexts/SaveContext";

export default function SaveWrapper({
  activities,
  userId,
}: {
  activities: ActivityCardType[] | null;
  userId: string | undefined;
}) {
  const context = useContext(SaveContext);

  if (!context) return null;

  const { data } = context;
  console.log(data);

  // Filter activities based on saved data
  const activitiesSaved = activities?.filter((ele) =>
    data.includes(ele.activityId),
  );

  return (
    <>
      {activitiesSaved && activitiesSaved.length > 0 ? (
        activitiesSaved.map((ele) => (
          <ActivityCard key={nanoid()} full data={ele} userId={userId} />
        ))
      ) : (
        <section className="space-y-5 self-center justify-self-center text-center tablet:mt-10">
          <Image
            src="https://i.postimg.cc/R0mynP6K/empty.png"
            alt="empty"
            height={327}
            width={517}
            className="h-[207px] w-[327px] object-contain tablet:h-[327px] tablet:w-[517px]"
          />

          <div className="">
            <h1 className="text-16xxl text-main">No saved activities</h1>
            <p className="text-14xxl text-secondActive">
              No saved activities found. To save an activity, look for the
              'save' icon on activity card.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
