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
        "space-y-2 rounded-[8px] bg-white px-5 py-[30px] tablet:space-y-5 tablet:rounded-xl tablet:px-[15px] laptop:p-[30px]",
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
          "w-[278px] text-12lg tablet:w-[240px] tablet:text-14lg laptop:w-[319px] laptop:text-16lg",
          value && "w-[243px] tablet:w-[243px] laptop:w-[243px]",
        )}
      >
        {para}
      </p>
    </div>
  );
}
