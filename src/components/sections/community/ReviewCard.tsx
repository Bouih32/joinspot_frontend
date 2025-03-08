import { FaStar } from "react-icons/fa";
import UserCard from "./UserCard";
import { cn } from "@/libs/utils";

export default function ReviewCard({ big }: { big?: boolean }) {
  return (
    <section
      className={cn(
        "flexCenter w-[328px] flex-col gap-[14px] rounded-[8px] bg-white px-6 tablet:h-[355px] tablet:w-[346px]",
        big && "min-h-[407px] tablet:w-[346px] xl:w-[384px]",
      )}
    >
      <div className="flex gap-[6px] text-[20px]">
        <FaStar className="text-alert" />
        <FaStar className="text-alert" />
        <FaStar className="text-alert" />
        <FaStar className="text-alert" />
        <FaStar className="text-neutral/20" />
      </div>
      <div className="space-y-[28px]">
        <UserCard />
        <p className="text-14sm text-darker">
          Lorem ipsum dolor sit amet consectetur. Cras tortor sit nam odio. Mi
          bibendum gravida malesuada lectus turpis gravida praesent est.. In
          risus lacus aliquet suscipit dignissim vestibulum at malesuada..
          Ultrices laoreet in fringilla eget enim diam consectetur mauris in..
        </p>
      </div>
    </section>
  );
}
