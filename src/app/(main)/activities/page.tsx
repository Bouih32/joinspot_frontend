import { getActivities } from "@/actions/getActivities";
import ActivityCard from "@/components/activities/ActivityCard";
import NoActivities from "@/components/activities/NoActivities";
import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/activities/UpperHeader";
import Container from "@/components/Container";
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
  }>;
}) {
  const params = await searchParams;
  const data = await getActivities(params);

  return (
    <main className="space-y-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container classname="flex gap-4 laptop:gap-[38px]">
        <SideFilter />
        <main className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
          {!data || data.length === 0 ? (
            <NoActivities />
          ) : (
            <>
              {data.map((ele) => (
                <ActivityCard key={nanoid()} full data={ele} />
              ))}
            </>
          )}
        </main>
      </Container>
    </main>
  );
}
