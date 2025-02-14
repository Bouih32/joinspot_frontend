import { cn } from "@/libs/utils";
import { ReactElement, ReactNode } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { BiSolidDownArrow } from "react-icons/bi";

type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  valid?: boolean;
  error: string | undefined;
  disabled?: boolean;
  placeholder: string;
  children: ReactNode;
  name: Path<T>;
};

export default function Select<T extends FieldValues>({
  valid,
  error,
  disabled,
  placeholder,
  name,
  children,

  register,
}: InputProps<T>) {
  return (
    <div className="space-y-[3px] font-openSans">
      <section className="">
        <div
          className={cn(
            "flexBetween w-full gap-3 rounded-t border border-b-0 border-neutral px-2 py-[3px] text-16sm text-darker tablet:px-3 tablet:py-[6px] xl:py-3.5",
            valid && "border-success text-darker",
            error && "border-error text-error",
            disabled && "bg-neutralLight",
          )}
        >
          <input
            {...register(name)}
            disabled={disabled}
            placeholder={placeholder}
            type="text"
            readOnly
            className={cn(
              "h-full w-full bg-transparent text-12sm caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none tablet:text-14sm",
              error && "placeholder:text-error",
            )}
          />

          <BiSolidDownArrow className="cursor-pointer text-[10px] hover:text-main" />
        </div>
        <div className="w-full rounded-b border border-t-0 border-neutral px-2 py-[3px] text-start text-[12px] font-semibold text-neutralDark tablet:px-3 tablet:py-[6px] tablet:text-[14px] xl:py-3.5">
          {children}
        </div>
      </section>

      {error && (
        <p className="text-start font-openSans text-10sm text-error">{error}</p>
      )}
    </div>
  );
}
