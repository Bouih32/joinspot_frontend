"use client";

import { getCategories } from "@/actions/getCategory";
import { Category } from "@/libs/types";
import { addParam, cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";

export default function CategoryFilter() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      setCategories(data.categories);
    };
    getData();
  }, []);

  const handleAdd = (category: string) => {
    setSelected(selected === category ? null : category);
    addParam("category", category, params, router);
    setOpen(false);
  };

  return (
    <div className="relative w-full space-y-1 pl-2 pr-3">
      <div
        className={cn(
          "flexBetween w-full cursor-pointer font-openSans text-[14px] leading-[24px] text-secondDark",
          selected && "font-semibold text-main",
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flexBetween w-full text-main">
          <p
            className={cn(
              "w-[70%] text-[14px] font-normal leading-[24px] outline-none first-letter:uppercase",
            )}
          >
            {selected ?? "Categories"}
          </p>
          <BiSolidCategoryAlt />
        </div>
      </div>
      {open && (
        <>
          <div
            className="fixed inset-0 z-[600] cursor-pointer"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute left-0 top-[120%] z-[800] w-full space-y-[5px] rounded bg-white p-[6px] shadow-22xl">
            {categories.map((ele) => (
              <div
                onClick={() => {
                  handleAdd(ele.categoryName);
                }}
                key={nanoid()}
                className={cn(
                  "flex cursor-pointer items-center gap-[9px] rounded-[2px] p-[9px] text-center text-14sm text-second hover:bg-[#F8F8F8]",
                  selected === ele.categoryName && "bg-[#F8F8F8]",
                )}
              >
                <p
                  className={cn(
                    "first-letter:uppercase",
                    ele.categoryName === selected && "text-main",
                  )}
                >
                  {ele.categoryName}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
