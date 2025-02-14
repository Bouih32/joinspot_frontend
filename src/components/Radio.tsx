import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { FaCircle } from "react-icons/fa";

type RadioProps = {
  disabled?: boolean;
  error?: boolean;
  id: string;
  children: ReactNode;
};

export default function Radio({ disabled, error, id, children }: RadioProps) {
  return (
    <div className="flexCenter gap-2 font-openSans">
      <label
        htmlFor={id}
        className={cn(
          "flexCenter group h-[18px] w-[18px] cursor-pointer items-center rounded-full border border-mainLightActive text-main",
          disabled && "border-neutralLightActive bg-neutralLight",
          error && "border-error bg-errorActive text-error",
        )}
      >
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          disabled={disabled}
        />
        <FaCircle className="text-[8px] peer-checked:text-white peer-disabled:text-neutralLightActive" />
      </label>
      <p className="text-16sm text-darker">{children}</p>
    </div>
  );
}
