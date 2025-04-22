import { getUserMessages } from "@/actions/userActions";
import MainTitleSearch from "@/components/profileUi/MainTitleSearch";
import MessageCard from "@/components/profileUi/messages/MessageCard";
import MessagesWrapper from "@/components/profileUi/messages/MessagesWrapper";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { Suspense } from "react";
import { BiSupport } from "react-icons/bi";

export default async function SupportPage({
  searchParams,
}: {
  searchParams: Promise<{
    search: string;
    page: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <main className="w-full space-y-6 pb-5 pt-5 tablet:pl-5 laptop:pl-8 laptop:pt-8">
      <MainTitleSearch>
        <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
          <BiSupport className="text-main" />
          <p>Support</p>
        </div>
      </MainTitleSearch>

      <Suspense fallback={<DashboardSkeleton />}>
        <MessagesWrapper params={params} />
      </Suspense>
    </main>
  );
}
