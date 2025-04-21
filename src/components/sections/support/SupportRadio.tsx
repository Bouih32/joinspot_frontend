import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

type RadioProps = {
  disabled?: boolean;
  error?: string;
  id: string;
  children: ReactNode;
};

export default function SupportRadio({ id, children, error }: RadioProps) {
  return (
    <div className="flexCenter cursor-pointer justify-start gap-2 text-nowrap font-openSans">
      <label
        htmlFor={id}
        className={cn(
          "flexCenter h-[14px] w-[14px] cursor-pointer items-center rounded-full bg-second text-white has-[input[type='radio']:checked]:bg-main",
        )}
      >
        <input type="radio" name="contact" id={id} className="peer sr-only" />

        <FaCheck className="hidden text-[8px] peer-checked:block" />
      </label>
      <label
        htmlFor={id}
        className={cn(
          "cursor-pointer text-12sm text-darker",
          error && "text-error",
        )}
      >
        {children}
      </label>
    </div>
  );
}
