import ActivitiesWrapper from "@/components/profileUi/ActivitiesWrapper";
import MainTitleSearch from "@/components/profileUi/MainTitleSearch";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { Suspense } from "react";
import { BsPostcardFill } from "react-icons/bs";

export type activeT = {
  endDay: string;
  title: string;
  totalTickets: any;
  totalRevenue: number;
  activityId: string;
  deletedAt: string;
};

export default async function AdminActivities({
  searchParams,
}: {
  searchParams: Promise<{
    search: string;
    page: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <main className="w-full space-y-6 pt-4 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <MainTitleSearch>
        <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
          <BsPostcardFill className="text-main" />
          <p>Joinspots Activities</p>
        </div>
      </MainTitleSearch>
      <Suspense fallback={<DashboardSkeleton />}>
        <ActivitiesWrapper params={params} />
      </Suspense>
    </main>
  );
}
