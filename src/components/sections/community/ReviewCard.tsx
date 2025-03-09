import { FaStar } from "react-icons/fa";
import UserCard from "./UserCard";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";

type ReviewCardProps = {
  name: string;
  category: string;
  text: string;
  stars: number;
  big?: boolean;
};

export default function ReviewCard({
  big,
  name,
  category,
  text,
  stars,
}: ReviewCardProps) {
  return (
    <section
      className={cn(
        "flex min-w-[328px] flex-col items-center gap-[14px] rounded-[8px] bg-white px-6 pt-[65px] tablet:h-[355px] tablet:w-[346px]",
        big && "min-h-[407px] tablet:w-[346px] xl:w-[384px]",
      )}
    >
      <div className="flex gap-[6px] text-[20px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={nanoid()}
            className={cn("text-alert", index >= stars && "text-neutral/20")}
          />
        ))}
      </div>
      <div className="space-y-[28px]">
        <UserCard category={category} title={name} />
        <p className="text-14sm text-darker">{text}</p>
      </div>
    </section>
  );
}
