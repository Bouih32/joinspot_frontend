import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { FaStar } from "react-icons/fa6";

export default function Stars({ stars }: { stars: number }) {
  return (
    <div className="flex gap-1 text-[12px] tablet:gap-[6px] tablet:text-[16px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={nanoid()}
          className={cn("text-neutral/20", index < stars && "text-alert")}
        />
      ))}
    </div>
  );
}
