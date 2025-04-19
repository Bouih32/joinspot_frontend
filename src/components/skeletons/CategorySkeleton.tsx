import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CategorySkeleton() {
  return (
    <div className="h-[35px] w-[328px] rounded tablet:w-[432px]">
      <Skeleton
        baseColor="#f3f3f3"
        highlightColor="#e0e0e0"
        width="100%"
        height="100%"
      />
    </div>
  );
}
