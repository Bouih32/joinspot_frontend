"use client";

import { getCities } from "@/actions/getCities";
import { City } from "@/libs/types";
import { cn } from "@/libs/utils";
import { set } from "date-fns";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbTriangleFilled } from "react-icons/tb";

type SelectCityProps<T extends FieldValues> = {
  addCity: (city: string) => void;
  error: string;
  name: Path<T>;
  register: UseFormRegister<T>;
};

export default function SelectCity<T extends FieldValues>({
  addCity,
  error,
  register,
  name,
}: SelectCityProps<T>) {
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
    <div className="relative space-y-1">
      <div
        className={cn(
          "flexBetween h-[30px] w-full cursor-pointer rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] leading-[24px] text-secondDark",
          selected && "font-semibold text-main",
          error && "border-error",
        )}
      >
        <div className="flexCenter gap-2.5">
          {selected && (
            <div className="grid h-[14px] place-content-center rounded bg-mainLightHover px-[6px] py-[1px] text-[10px] font-semibold text-main">
              <span className="first-letter:uppercase"> {selected}</span>
            </div>
          )}
          <input
            placeholder="Activity location"
            type="text"
            {...register(name)}
            className="text-[14px] font-normal leading-[24px] text-secondDark outline-none"
          />
        </div>
        <div
          className="flexCenter gap-[6px] text-main"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <IoIosArrowUp className="hover:text-main" />
          ) : (
            <IoIosArrowDown className="hover:text-main" />
          )}
          <span className="text-12xxl text-main">City</span>
        </div>
      </div>
      {open && (
        <>
          <div
            className="fixed inset-0 cursor-pointer bg-transparent"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute left-0 top-[120%] z-50 w-full space-y-[5px] rounded bg-white p-[6px] shadow-22xl">
            {cities.map((ele) => (
              <div
                onClick={() => {
                  handleAdd(ele.cityName);
                  addCity(ele.cityId);
                }}
                key={nanoid()}
                className={cn(
                  "flex cursor-pointer items-center gap-[9px] rounded-[2px] p-[9px] text-center text-14sm text-second hover:bg-[#F8F8F8]",
                  selected === ele.cityName && "bg-[#F8F8F8]",
                )}
              >
                {ele.cityName === selected && (
                  <TbTriangleFilled className="rotate-180 text-main" />
                )}
                <p className="first-letter:uppercase">{ele.cityName}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
