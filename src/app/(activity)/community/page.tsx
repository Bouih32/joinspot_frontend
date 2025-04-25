import ActivitiesSkeleton from "@/components/activities/ActivitiesSkeleton";
import SideFilter from "@/components/activities/SideFilter";
import UpperHeader from "@/components/communityUi/UpperHeader";
import Container from "@/components/Container";
import { Suspense } from "react";

export default function CommunityPage() {
  return (
    <main className="min-h-screen space-y-5 pb-5 tablet:space-y-[32px]">
      <UpperHeader />
      <Container classname="flex gap-4 laptop:gap-[38px]">
        <SideFilter />

        <Suspense fallback={<ActivitiesSkeleton />}>
          commuuunity paaage babyyy
        </Suspense>
      </Container>
    </main>
  );
}
