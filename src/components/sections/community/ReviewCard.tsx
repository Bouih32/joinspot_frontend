import { FaStar } from "react-icons/fa";
import UserCard from "./UserCard";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";

type ReviewCardProps = {
  name: string;
  category: string;
  text: string;
  stars: number;
};

export default function ReviewCard({
  name,
  category,
  text,
  stars,
}: ReviewCardProps) {
  return (
    <section
      className={cn(
        "flexCenter h-[280px] min-w-[328px] flex-col gap-[14px] rounded-[8px] bg-white px-6 tablet:h-[300px] tablet:w-[346px] xl:w-[384px]",
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
