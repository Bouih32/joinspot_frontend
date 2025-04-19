import ConfirmWrapper from "@/components/profileUi/ConfirmWrapper";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { Suspense } from "react";
import { BiSolidCheckCircle } from "react-icons/bi";

export default function ConfirmationPage() {
  return (
    <main className="w-full space-y-5 pt-4 tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
        <BiSolidCheckCircle className="text-main" />
        <p>Confirmation</p>
      </div>
      <Suspense fallback={<DashboardSkeleton />}>
        <ConfirmWrapper />
      </Suspense>
    </main>
  );
}
