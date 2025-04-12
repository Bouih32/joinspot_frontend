import { cn } from "@/libs/utils";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type ContactInputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  error: string | undefined;
  type: string;
  placeholder: string;
  name: Path<T>;
};

export default function ContactInput<T extends FieldValues>({
  register,
  error,
  type,
  placeholder,
  name,
}: ContactInputProps<T>) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 text-darker">
        <label htmlFor="" className="text-14lg">
          {placeholder}
        </label>
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={cn(
            "rounded-none border-b border-darker bg-transparent pb-[11px] text-14lg outline-none",
            error && "border-error",
          )}
        />
      </div>
      {error && <p className="text-error">{error}</p>}
    </div>
  );
}
