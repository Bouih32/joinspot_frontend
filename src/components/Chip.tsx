import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";
type ChipProps = {
  secondary?: boolean;
  icon?: boolean;
  children: ReactNode;
  classname?: string;
};

export default function Chip({
  children,
  icon,
  secondary,
  classname,
}: ChipProps) {
  return (
    <div
      className={cn(
        "flexCenter w-fit gap-2 rounded-[20px] bg-main px-2.5 py-[1px] font-openSans text-14sm text-white tablet:px-[14px] tablet:py-1 laptop:px-[18px] laptop:py-2",
        secondary && "border border-main bg-transparent text-main",

        classname,
      )}
    >
      {children}
      {icon && <RxCross2 className="cursor-pointer" />}
    </div>
  );
}
