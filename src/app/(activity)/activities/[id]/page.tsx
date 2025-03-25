import Container from "@/components/Container";
import React from "react";
import Overview from "@/components/activities/details/Overview";
import Description from "@/components/activities/details/Description";
import Ratings from "@/components/activities/details/Ratings";
import JoinSection from "@/components/activities/details/JoinSection";
import Button from "@/components/Button";
import { getActivityById } from "@/actions/getActivities";
import { ActivityDetailsT } from "@/libs/types";

export default async function ActivityDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const activity: ActivityDetailsT = await getActivityById(id);

  return (
    <main className="space-y-10">
      <Container classname="tablet:border laptop:p-[25px] space-y-3 tablet:space-y-5  tablet:p-4 border-secondLightActive rounded-xl tablet:mt-10 mt-[25px]">
        <Overview activity={activity} />
        <Description description={activity.description} />
        <Ratings />
        <JoinSection />
      </Container>
      <Container>
        <section className="">
          <div className="flexBetween flex-col gap-4 tablet:flex-row">
            <div className="">
              <h3 className="text-16xxl text-main laptop:text-26xxl">
                Reviews & Ratings
              </h3>
              <p className="text-12sm text-darker tablet:text-14sm laptop:text-16sm">
                Join <span className="font-bold">Sophie Calzoni</span> for more
                unforgettable experiences. Spots fill up fast—reserve your next
                adventure today!
              </p>
            </div>
            <div className="self-end">
              <Button secondary>See more</Button>
            </div>
          </div>
          <section></section>
        </section>
      </Container>
    </main>
  );
}
