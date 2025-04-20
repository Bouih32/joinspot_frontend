import RevenueWrapper from "@/components/profileUi/RevenueWrapper";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { Suspense } from "react";
import { IoWallet } from "react-icons/io5";

export default function RevenuePage() {
  return (
    <main className="w-full space-y-6 pb-5 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <IoWallet className="text-main" />
        <p>Your revenue</p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <RevenueWrapper />
      </Suspense>
    </main>
  );
}
