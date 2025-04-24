import PaymentsWrapper from "@/components/adminUi/PaymentsWrapper";
import MainTitleSearch from "@/components/profileUi/MainTitleSearch";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { Suspense } from "react";
import { AiOutlineDollar } from "react-icons/ai";

export default async function AdminPaymentsPage({
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
          <AiOutlineDollar className="text-main" />
          <p>Joinspots Payments</p>
        </div>
      </MainTitleSearch>

      <Suspense fallback={<DashboardSkeleton />}>
        <PaymentsWrapper params={params} />
      </Suspense>
    </main>
  );
}
