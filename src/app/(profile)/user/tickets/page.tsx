import MainTitleSearch from "@/components/profileUi/MainTitleSearch";
import TicketsWrapper from "@/components/profileUi/TicketsWrapper";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";

import { Suspense } from "react";
import { BsFillTicketFill } from "react-icons/bs";

export default async function TicketPage({
  searchParams,
}: {
  searchParams: Promise<{
    search: string;
    page: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <main className="w-full space-y-5 pb-5 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <MainTitleSearch>
        <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
          <BsFillTicketFill className="text-main" />
          <p>My tickets</p>
        </div>
      </MainTitleSearch>

      <Suspense fallback={<DashboardSkeleton />}>
        <TicketsWrapper params={params} />
      </Suspense>
    </main>
  );
}
