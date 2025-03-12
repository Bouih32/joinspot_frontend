import ActivityCard from "@/components/activities/ActivityCard";
import MainFilters from "@/components/activities/mainFilters/MainFilters";
import NoActivities from "@/components/activities/NoActivities";
import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/activities/UpperHeader";
import Container from "@/components/Container";

export default function ActivitiesPage() {
  return (
    <main className="space-y-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container classname="flex gap-4 laptop:gap-[38px]">
        <SideFilter />
        <main className="flexCenter w-full flex-col space-y-4 pb-5 tablet:space-y-5">
          <MainFilters />
          {/* <NoActivities /> */}
          {/* <ActivityCard full />
          <ActivityCard full />
          <ActivityCard full />
          <ActivityCard full />
          <ActivityCard full /> */}
        </main>
      </Container>
    </main>
  );
}
