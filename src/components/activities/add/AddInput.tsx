import { cn } from "@/libs/utils";
import { ReactElement } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  error: string | undefined;
  type: string;
  icon?: ReactElement;
  placeholder: string;
  name: Path<T>;
  classname?: string;
};

export default function AddInput<T extends FieldValues>({
  error,
  icon,
  placeholder,
  name,
  type,
  register,
}: InputProps<T>) {
  return (
    <div className="space-y-[3px]">
      <div
        className={cn(
          "flexBetween h-[30px] w-full gap-3 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[12px] leading-[24px] text-secondDark",
          error && "border-error text-error",
        )}
      >
        <input
          {...register(name)}
          placeholder={placeholder}
          type={type}
          className={cn(
            "h-full w-full bg-transparent text-14sm caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none tablet:text-14sm",
            error && "placeholder:text-error",
          )}
        />

        {icon && icon}
      </div>
    </div>
  );
}
