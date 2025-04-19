import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function DashboardSkeleton() {
  return (
    <div className="h-[35px] w-full tablet:h-[50px]">
      <Skeleton
        baseColor="#f3f3f3"
        highlightColor="#e0e0e0"
        width="100%"
        height="100%"
        count={10}
        className="flex-1"
      />
    </div>
  );
}
