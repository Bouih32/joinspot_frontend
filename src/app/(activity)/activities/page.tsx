import { getActivities } from "@/actions/activityActions";
import { getToken } from "@/actions/decodeToken";
import ActivitiesSkeleton from "@/components/activities/ActivitiesSkeleton";
import ActivitiesWrapper from "@/components/activities/ActivitiesWrapper";
import ActivityCard from "@/components/activities/ActivityCard";
import Success from "@/components/activities/add/Success";
import ClearAll from "@/components/activities/mainFilters/ClearAll";
import NoActivities from "@/components/activities/NoActivities";
import SaveWrapper from "@/components/activities/SaveWrapper";
import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/activities/UpperHeader";
import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import Questions from "@/components/sections/support/Questions";
import { JwtPayload } from "jsonwebtoken";
import { nanoid } from "nanoid";
import { Suspense } from "react";

export default async function ActivitiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    seats: string;
    category: string;
    date: string;
    my: string;
    search: string;
    page: string;
  }>;
}) {
  const params = await searchParams;
  // const token = await getToken();
  // let role: string | undefined;
  // let userId: string | undefined;

  // if (typeof token !== "string" && token !== null) {
  //   role = (token as JwtPayload).role;
  //   userId = (token as JwtPayload).userId;
  // }

  // let activitiesData = await getActivities(params);

  // const data =
  //   params.my === "own" && (!token || role === "VISITOR")
  //     ? null
  //     : activitiesData.activities.filter((ele) => ele.deletedAt === null);

  return (
    <main className="min-h-screen space-y-5 pb-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container classname="flex gap-4 laptop:gap-[38px]">
        <SideFilter />

        <Suspense fallback={<ActivitiesSkeleton />}>
          <ActivitiesWrapper params={params} />
        </Suspense>
      </Container>
    </main>
  );
}
