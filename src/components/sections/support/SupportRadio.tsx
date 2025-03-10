import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { FaCheck, FaCircle } from "react-icons/fa";

type RadioProps = {
  disabled?: boolean;
  error?: boolean;
  id: string;
  children: ReactNode;
};

export default function SupportRadio({ id, children }: RadioProps) {
  return (
    <div className="flexCenter justify-start gap-2 font-openSans">
      <label
        htmlFor={id}
        className={cn(
          "flexCenter group h-[14px] w-[14px] cursor-pointer items-center rounded-full bg-main text-white",
        )}
      >
        <input type="radio" name="contact" id={id} className="peer sr-only" />
        <FaCheck className="hidden text-[8px] peer-checked:block" />
      </label>
      <p className="text-12sm text-darker">{children}</p>
    </div>
  );
}
