import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";

type CheckProps = {
  disabled?: boolean;
  error?: boolean;
  id: string;
  children: ReactNode;
  proveBy: string;
  handleClick: () => void;
};

export default function Check({
  disabled,
  error,
  id,
  children,
  handleClick,
  proveBy,
}: CheckProps) {
  return (
    <div className="flexCenter gap-2 font-openSans" onClick={handleClick}>
      <label
        htmlFor={id}
        className={cn(
          "flexCenter group h-[18px] w-[18px] cursor-pointer items-center rounded border border-mainLightActive text-main",
          disabled && "border-neutralLightActive bg-neutralLight",
          error && "border-error bg-errorActive text-error",
        )}
      >
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          disabled={disabled}
          readOnly
          checked={id === proveBy}
        />
        <FaCheck className="text-[12px] peer-checked:text-white peer-disabled:text-neutralLightActive" />
      </label>
      <label htmlFor={id} className="text-16sm text-darker">
        {children}
      </label>
    </div>
  );
}
