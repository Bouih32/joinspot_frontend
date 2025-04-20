import Search from "@/components/activities/Search";
import MobileSearch from "@/components/adminUi/MobileSearch";
import FeesWrapper from "@/components/profileUi/FeesWrapper";
import MainTitleSearch from "@/components/profileUi/MainTitleSearch";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { Suspense } from "react";
import { IoWallet } from "react-icons/io5";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{
    search: string;
    page: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <main className="w-full space-y-6 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <MainTitleSearch>
        <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
          <IoWallet className="text-main" />
          <p>Joinspots Fees</p>
        </div>
      </MainTitleSearch>

      <Suspense fallback={<DashboardSkeleton />}>
        <FeesWrapper params={params} />
      </Suspense>
    </main>
  );
}
