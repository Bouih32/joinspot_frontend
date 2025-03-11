import ActivityCard from "@/components/activities/ActivityCard";
import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/activities/UpperHeader";
import Container from "@/components/Container";

export default function ActivitiesPage() {
  return (
    <main className="space-y-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container classname="flex gap-4 laptop:gap-[38px]">
        <SideFilter />
        <main className="w-full space-y-4 tablet:space-y-5">
          <ActivityCard classname="tablet:w-full" />
          <ActivityCard classname="tablet:w-full" />
          <ActivityCard classname="tablet:w-full" />
          <ActivityCard classname="tablet:w-full" />
          <ActivityCard classname="tablet:w-full" />
        </main>
      </Container>
    </main>
  );
}
