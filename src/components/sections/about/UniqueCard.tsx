import { cn } from "@/libs/utils";

type UniqueCardProps = {
  title: string;
  para: string;
  value?: boolean;
};

export default function UniqueCard({ title, para, value }: UniqueCardProps) {
  return (
    <div
      className={cn(
        "space-y-2 rounded-[8px] bg-white px-5 py-[30px] tablet:space-y-5 tablet:rounded-xl laptop:p-[30px]",
        value &&
          "p-5 tablet:space-y-2.5 tablet:p-5 laptop:space-y-5 laptop:p-5",
      )}
    >
      <h4
        className={cn(
          "text-14xl font-bold text-second tablet:text-20xl laptop:text-[24px]",
          value && "text-24xl tablet:text-24xl",
        )}
      >
        {title}
      </h4>
      <p
        className={cn(
          "w-[278px] text-wrap text-16lg tablet:w-[319px]",
          value && "w-[243px] tablet:w-[243px]",
        )}
      >
        {para}
      </p>
    </div>
  );
}
