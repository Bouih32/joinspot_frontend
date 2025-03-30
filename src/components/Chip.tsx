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
        "flexCenter h-fit w-fit gap-2 rounded-[20px] bg-main px-2.5 py-[1px] font-openSans text-10sm text-white first-letter:uppercase tablet:px-[14px] tablet:py-1 tablet:text-14sm",
        secondary && "border border-main bg-transparent text-main",

        classname,
      )}
    >
      {children}
      {icon && <RxCross2 className="cursor-pointer" />}
    </div>
  );
}
