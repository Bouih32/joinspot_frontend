import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
type ButtonProps = {
  variant?: boolean;
  secondary?: boolean;
  icon?: boolean;
  children: ReactNode;
  disabled?: boolean;
};

export default function Button({
  children,
  icon,
  secondary,
  disabled,
  variant,
}: ButtonProps) {
  return (
    <div
      className={cn(
        "flexCenter text-16xl bg-main w-fit gap-2 rounded px-3 py-[3px] text-white md:px-4 md:py-[6px] xl:px-6 xl:py-2.5",
        secondary && "border-main text-main border bg-transparent",
        disabled && !secondary && "bg-secondLightActive",
        disabled &&
          secondary &&
          "text-secondLightActive border-secondLightActive",
        disabled && !secondary && variant && "bg-second",
        disabled && secondary && variant && "text-second border-second",
      )}
    >
      {children}
      {icon && <MdKeyboardArrowRight className="text-[20px]" />}
    </div>
  );
}
