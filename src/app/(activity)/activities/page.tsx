import ActivitiesSkeleton from "@/components/activities/ActivitiesSkeleton";
import ActivitiesWrapper from "@/components/activities/ActivitiesWrapper";
import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/activities/UpperHeader";
import Container from "@/components/Container";
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
