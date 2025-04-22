import { PiUsersFill } from "react-icons/pi";
import JoinedWrapper from "@/components/profileUi/JoinedWrapper";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { Suspense } from "react";
import MainTitleSearch from "@/components/profileUi/MainTitleSearch";

export default async function JoinedPage({
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
        <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
          <PiUsersFill className="text-main" />
          <p>Users that joined your activities</p>
        </div>
      </MainTitleSearch>
      <Suspense fallback={<DashboardSkeleton />}>
        <JoinedWrapper params={params} />
      </Suspense>
    </main>
  );
}
