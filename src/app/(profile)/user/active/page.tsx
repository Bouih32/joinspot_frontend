import ActiveWrapper from "@/components/profileUi/ActiveWrapper";
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

export default function ActivePage() {
  return (
    <main className="w-full space-y-6 pt-4 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
        <BsPostcardFill className="text-main" />
        <p>Your live activities</p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <ActiveWrapper />
      </Suspense>
    </main>
  );
}
