import { cn } from "@/libs/utils";
import { ReactElement } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  valid?: boolean;
  error: string | undefined;
  disabled?: boolean;
  type: string;
  icon?: ReactElement;
  placeholder: string;
  name: Path<T>;
};

export default function Input<T extends FieldValues>({
  valid,
  error,
  disabled,
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
          "flexBetween w-full gap-3 rounded border border-neutral px-2 py-2 font-openSans text-16sm text-darker tablet:px-3 tablet:py-[6px] xl:py-3.5",
          valid && "border-success text-darker",
          error && "border-error text-error",
          disabled && "bg-neutralLight",
        )}
      >
        <input
          {...register(name)}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          className={cn(
            "h-full w-full bg-transparent text-14sm caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none tablet:text-14sm",
            error && "placeholder:text-error",
          )}
        />

        {icon && icon}
      </div>
      {error && (
        <p className="text-start font-openSans text-10sm text-error">{error}</p>
      )}
    </div>
  );
}
