import { cn, getContext } from "@/libs/utils";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { BiSolidDownArrow } from "react-icons/bi";
import SelectItem from "./SelectItem";
import { nanoid } from "nanoid";
import { useState } from "react";
import { SignupContext } from "@/contexts/SignupContext";
import { Category } from "@/libs/types";

type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  valid?: boolean;
  error: string | undefined;
  disabled?: boolean;
  placeholder: string;
  handleClick: (ele: string) => void;
  selected: string | null;
  name: Path<T>;
};

export default function SelectCategories<T extends FieldValues>({
  valid,
  error,
  disabled,
  placeholder,
  selected,
  handleClick,
  name,
  register,
}: InputProps<T>) {
  const [open, setOpen] = useState(false);
  const { categories } = getContext(SignupContext);

  return (
    <div className="relative space-y-[3px] font-openSans">
      <section className="z-50">
        <div
          className={cn(
            "flexBetween z-50 w-full cursor-pointer gap-3 border border-neutral px-2 py-2 text-16sm text-darker tablet:px-3 tablet:py-[6px] xl:py-3.5",
            valid && "border-success text-darker",
            error && "border-error text-error",
            disabled && "bg-neutralLight",
            open && "rounded-t border-b-0",
            !open && "rounded",
          )}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
        >
          <input
            {...register(name)}
            disabled={disabled}
            placeholder={placeholder}
            type="text"
            readOnly
            value={selected ? selected : "Please select a category"}
            className={cn(
              "h-full w-full bg-transparent text-14sm caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none",
              error && "placeholder:text-error",
            )}
          />

          <BiSolidDownArrow
            className={cn(
              "cursor-pointer text-[10px] transition-all duration-75 hover:text-main",
              open && "rotate-[180deg]",
            )}
          />
        </div>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onClick={() => setOpen(false)}
            ></div>
            <div className="absolute top-[100%] z-50 w-full rounded-b border border-t-0 border-neutral bg-white px-2 py-[3px] text-start text-[12px] font-semibold text-neutralDark tablet:px-3 tablet:py-[6px] tablet:text-[14px] xl:py-3.5">
              {categories.map((ele, index) => (
                <SelectItem
                  classname={cn(
                    "first-letter:uppercase",
                    ele.categoryName === selected &&
                      "border-main font-bold bg-mainLight text-main",
                  )}
                  index={index}
                  key={nanoid()}
                  handleClick={() => {
                    handleClick(ele.categoryName);
                    setOpen(false);
                  }}
                >
                  {ele.categoryName}
                </SelectItem>
              ))}
            </div>
          </>
        )}
      </section>

      {error && (
        <p
          className={cn(
            "text-start font-openSans text-10sm text-error",
            open && "hidden",
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}
