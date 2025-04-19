import { PiUsersFill } from "react-icons/pi";
import { Suspense } from "react";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import UsersWrapper from "@/components/profileUi/UsersWrapper";

export type UserT = {
  userId: string;
  userName: string;
  avatar: string;
  deletedAt: string;
};

export default async function UsersPage() {
  return (
    <main className="w-full space-y-6 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <PiUsersFill className="text-main" />
        <p>Joinspots Users</p>
      </div>
      <Suspense fallback={<DashboardSkeleton />}>
        <UsersWrapper />
      </Suspense>
    </main>
  );
}
