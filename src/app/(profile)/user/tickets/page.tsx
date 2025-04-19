import TicketsWrapper from "@/components/profileUi/TicketsWrapper";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";

import { Suspense } from "react";

export default function TicketPage() {
  return (
    <main className="w-full py-10 pl-2 laptop:pl-6">
      <Suspense fallback={<DashboardSkeleton />}>
        <TicketsWrapper />
      </Suspense>
    </main>
  );
}
