import { cn } from "@/libs/utils";
import { ReactNode } from "react";

export default function NotificationNumber({
  children,
  notification,
}: {
  children: ReactNode;
  notification?: boolean;
}) {
  return (
    <span
      className={cn(
        "flexCenter absolute -top-[25%] right-[40%] h-[11px] w-[11px] translate-x-full translate-y-[50%] rounded-full bg-main text-[7px] font-bold text-white tablet:-top-[50%] tablet:right-[50%] tablet:h-[15px] tablet:w-[15px] tablet:text-[8px]",
        notification && "right-[40%]",
      )}
    >
      {children}
    </span>
  );
}
