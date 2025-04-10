import { getActivities } from "@/actions/activityActions";
import { getToken } from "@/actions/decodeToken";
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
  const token = await getToken();
  let role: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
  }

  let activitiesData = await getActivities(params);

  const data =
    params.my === "own" && (!token || role === "VISITOR")
      ? null
      : activitiesData.activities;

  return (
    <main className="min-h-screen space-y-5 pb-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container classname="flex gap-4 laptop:gap-[38px]">
        <SideFilter />
        <main className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
            <Success />
            <ClearAll />
            {params.my === "faq" ? (
              <Questions activities />
            ) : params.my === "save" ? (
              <SaveWrapper activities={data} />
            ) : !data || data.length === 0 ? (
              <NoActivities token={token} params={params} />
            ) : (
              data.map((ele) => <ActivityCard key={nanoid()} full data={ele} />)
            )}
          </div>
          {data && data.length > 0 && params.my !== "save" && (
            <Pagination
              pages={activitiesData.pages}
              page={params.page ? parseInt(params.page) : undefined}
            />
          )}
        </main>
      </Container>
    </main>
  );
}
