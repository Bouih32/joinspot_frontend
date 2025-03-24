import { cn } from "@/libs/utils";
import { ReactElement } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  error: string | undefined;
  placeholder: string;
  name: Path<T>;
  classname?: string;
};

export default function TextArea<T extends FieldValues>({
  error,
  placeholder,
  name,
  classname,
  register,
}: InputProps<T>) {
  return (
    <div>
      <textarea
        {...register(name)}
        className={cn(
          "h-[100px] w-full resize-none rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] text-secondDark outline-none placeholder:text-secondDark laptop:h-[120px]",

          error && "border-error text-error placeholder:text-error",
          classname,
        )}
        placeholder={placeholder}
      ></textarea>
      {error ? (
        <p className="text-[9px] leading-3 text-error">{error}</p>
      ) : null}
    </div>
  );
}
