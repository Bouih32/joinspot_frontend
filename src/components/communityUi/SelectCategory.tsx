"use client";

import { getCategories } from "@/actions/getCategory";
import { Category } from "@/libs/types";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type SelectTagProps = {
  error: string;
  addCategory: (category: Category) => void;
  selected: Category | null;
};

export default function SelectCategory({
  error,
  addCategory,
  selected,
}: SelectTagProps) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const getData = async () => {
      const info = await getCategories();
      const data = info.categories;
      if (Array.isArray(data)) {
        setCategory(data); // Ensure data is an array before setting the state
      }
    };
    getData();
  }, []);

  const handleAdd = (category: Category) => {
    addCategory(category);
    setOpen(false);
  };

  return (
    <div className="relative space-y-1">
      <div
        className={cn(
          "flexBetween h-[30px] w-full cursor-pointer gap-3 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] leading-[24px] text-secondDark",
          selected && "font-semibold text-main",
          error && "border-error",
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p>{selected ? selected.categoryName : "Select category"}</p>
        {open ? (
          <IoIosArrowUp className="hover:text-main" />
        ) : (
          <IoIosArrowDown className="hover:text-main" />
        )}
      </div>
      {open && (
        <>
          <div
            className="fixed inset-0 cursor-pointer bg-transparent"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute left-0 top-[120%] z-50 w-full space-y-[5px] rounded bg-white p-[6px] shadow-22xl">
            {category.map((ele) => (
              <div
                onClick={() => {
                  handleAdd(ele);
                }}
                key={nanoid()}
                className={cn(
                  "flex cursor-pointer items-center gap-[9px] rounded-[2px] p-[9px] text-center text-14lg text-second hover:bg-[#F8F8F8]",
                )}
              >
                <p className="first-letter:uppercase">{ele.categoryName}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {error ? (
        <p className="text-[9px] leading-3 text-error">{error}</p>
      ) : null}
    </div>
  );
}
