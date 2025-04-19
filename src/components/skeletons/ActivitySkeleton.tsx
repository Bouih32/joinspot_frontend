import { cn } from "@/libs/utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ActivitySkeleton({ full }: { full?: boolean }) {
  return (
    <div
      className={cn(
        "h-[380px] w-[328px] rounded-xl tablet:h-[245px] tablet:w-[648px] tablet:rounded-[8px]",
        full && "tablet:w-full",
      )}
    >
      <Skeleton
        baseColor="#f3f3f3"
        highlightColor="#e0e0e0"
        width="100%"
        height="100%"
      />
    </div>
  );
}
