import ActiveWrapper from "@/components/profileUi/ActiveWrapper";
import MainTitleSearch from "@/components/profileUi/MainTitleSearch";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { Suspense } from "react";
import { BsPostcardFill } from "react-icons/bs";

export type activeT = {
  endDay: string;
  title: string;
  totalTickets: any;
  totalRevenue: number;
  deletedAt: string;
};

export default async function ActivePage({
  searchParams,
}: {
  searchParams: Promise<{
    search: string;
    page: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <main className="w-full space-y-6 pb-5 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <MainTitleSearch>
        <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
          <BsPostcardFill className="text-main" />
          <p>Your live activities</p>
        </div>
      </MainTitleSearch>

      <Suspense fallback={<DashboardSkeleton />}>
        <ActiveWrapper params={params} />
      </Suspense>
    </main>
  );
}
