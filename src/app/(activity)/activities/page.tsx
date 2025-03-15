import { getToken } from "@/actions/decodeToken";
import { getActivities } from "@/actions/getActivities";
import ActivityCard from "@/components/activities/ActivityCard";
import NoActivities from "@/components/activities/NoActivities";
import SaveWrapper from "@/components/activities/SaveWrapper";
import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/activities/UpperHeader";
import Container from "@/components/Container";
import Questions from "@/components/sections/support/Questions";
import { JwtPayload } from "jsonwebtoken";
import { nanoid } from "nanoid";
// New client component

export default async function ActivitiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    seats: string;
    category: string;
    date: string;
    my: string;
    search: string;
  }>;
}) {
  const params = await searchParams;
  const token = await getToken();
  let role: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
  }

  const data =
    params.my === "own" && (!token || role === "VISITOR")
      ? null
      : await getActivities(params);

  return (
    <main className="space-y-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container classname="flex gap-4 laptop:gap-[38px]">
        <SideFilter />
        <main className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
          {params.my === "faq" ? (
            <Questions activities />
          ) : params.my === "save" ? (
            <SaveWrapper activities={data} />
          ) : !data || data.length === 0 ? (
            <NoActivities token={token} params={params} />
          ) : (
            data.map((ele) => <ActivityCard key={nanoid()} full data={ele} />)
          )}
        </main>
      </Container>
    </main>
  );
}
