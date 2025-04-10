"use client";

import { getCities } from "@/actions/getCities";
import { City } from "@/libs/types";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbTriangleFilled } from "react-icons/tb";

export default function CityFilter() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCities();
      setCities(data.cities);
    };
    getData();
  }, []);

  const handleAdd = (city: string) => {
    setSelected(selected === city ? null : city);
    setOpen(false);
  };

  return (
    <div className="relative w-full space-y-1 pl-3">
      <div
        className={cn(
          "flexBetween w-full cursor-pointer font-openSans text-[14px] leading-[24px] text-secondDark",
          selected && "font-semibold text-main",
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2.5">
          <p
            className={cn(
              "w-[70%] text-[14px] font-normal leading-[24px] text-main outline-none first-letter:uppercase",
            )}
          >
            {selected ?? "Cities"}
          </p>
        </div>
      </div>
      {open && (
        <>
          <div
            className="fixed inset-0 z-[600] cursor-pointer bg-transparent"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute left-0 top-[120%] z-[800] w-full space-y-[5px] rounded bg-white p-[6px] shadow-22xl">
            {cities.map((ele) => (
              <div
                onClick={() => {
                  handleAdd(ele.cityName);
                }}
                key={nanoid()}
                className={cn(
                  "flex cursor-pointer items-center gap-[9px] rounded-[2px] p-[9px] text-center text-14sm text-second hover:bg-[#F8F8F8]",
                  selected === ele.cityName && "bg-[#F8F8F8]",
                )}
              >
                <p
                  className={cn(
                    "first-letter:uppercase",
                    ele.cityName === selected && "text-main",
                  )}
                >
                  {ele.cityName}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
