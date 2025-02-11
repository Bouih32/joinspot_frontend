import { cn } from "@/libs/utils";
import { ReactElement } from "react";

type InputProps = {
  valid?: boolean;
  error?: boolean;
  disabled?: boolean;
  icon?: ReactElement;
  placeholder: string;
};

export default function Input({
  valid,
  error,
  disabled,
  icon,
  placeholder,
}: InputProps) {
  return (
    <div
      className={cn(
        "flexBetween w-full rounded border border-neutralHover px-2 py-[3px] font-openSans text-16sm text-darker tablet:px-3 tablet:py-[6px] xl:py-3.5",
        valid && "border-success text-darker",
        error && "border-error text-error",
        disabled && "bg-neutralLight",
      )}
    >
      <input
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          "h-full w-full bg-transparent caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none",
          error && "placeholder:text-error",
        )}
      />

      {icon && icon}
    </div>
  );
}
