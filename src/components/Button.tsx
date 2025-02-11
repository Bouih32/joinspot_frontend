import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
type ButtonProps = {
  variant?: boolean;
  secondary?: boolean;
  icon?: boolean;
  children: ReactNode;
  disabled?: boolean;
  classname?: string;
};

export default function Button({
  children,
  icon,
  secondary,
  disabled,
  variant,
  classname,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "flexCenter w-fit cursor-pointer gap-2 rounded bg-main px-3 py-[3px] font-openSans text-16xl text-white disabled:pointer-events-none disabled:bg-secondLightActive tablet:px-4 tablet:py-[6px]",
        secondary &&
          "border border-main bg-transparent text-main disabled:border-secondLightActive disabled:bg-transparent disabled:text-secondLightActive",
        variant && "bg-second",
        variant && secondary && "border-second bg-transparent text-second",
        classname,
      )}
    >
      {children}
      {icon && <MdKeyboardArrowRight className="text-[20px]" />}
    </button>
  );
}
