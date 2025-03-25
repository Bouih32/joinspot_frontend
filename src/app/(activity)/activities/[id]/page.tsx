import Container from "@/components/Container";
import React from "react";
import Overview from "@/components/activities/details/Overview";
import Description from "@/components/activities/details/Description";
import Ratings from "@/components/activities/details/Ratings";

export default async function ActivityDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <Container classname="tablet:border laptop:p-[25px] space-y-3 tablet:space-y-5  tablet:p-4 border-secondLightActive rounded-xl tablet:mt-10 mt-[25px]">
        <Overview />
        <Description />
        <Ratings />
      </Container>
    </main>
  );
}
