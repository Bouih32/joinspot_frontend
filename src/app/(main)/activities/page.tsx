import { getActivities } from "@/actions/getActivities";
import ActivityCard from "@/components/activities/ActivityCard";
import NoActivities from "@/components/activities/NoActivities";
import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/activities/UpperHeader";
import Container from "@/components/Container";
import { nanoid } from "nanoid";

export default async function ActivitiesPage() {
  const data = await getActivities();

  return (
    <main className="space-y-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container classname="flex gap-4 laptop:gap-[38px]">
        <SideFilter />
        <main className="flexCenter w-full flex-col space-y-4 pb-5 tablet:space-y-5">
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
