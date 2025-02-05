import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";
type ButtonProps = {
  variant?: boolean;
  secondary?: boolean;
  icon?: boolean;
  children: ReactNode;
  classname?: string;
};

export default function Chip({
  children,
  icon,
  secondary,
  variant,
  classname,
}: ButtonProps) {
  return (
    <div
      className={cn(
        "flexCenter w-fit gap-2 rounded-[20px] bg-main px-2.5 py-[1px] font-openSans text-14sm text-white md:px-[14px] md:py-1 xl:px-[18px] xl:py-2",
        secondary && "border border-main bg-transparent text-main",
        variant && "bg-second",
        variant && secondary && "border-second bg-transparent text-second",
        classname,
      )}
    >
      {children}
      {icon && <RxCross2 className="cursor-pointer" />}
    </div>
  );
}
