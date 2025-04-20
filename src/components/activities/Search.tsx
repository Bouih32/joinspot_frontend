"use client";

import { addParam } from "@/libs/utils";
import { searchValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { z } from "zod";

export type SearchT = z.infer<typeof searchValidation>;

export default function Search() {
  const [show, setShow] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<SearchT>({
    resolver: zodResolver(searchValidation),
  });

  const handleSearch = async () => {
    const result = await trigger();
    if (!result) return setValue("search", "Ooops , that's alot !!");
    const data = getValues("search");
    if (!data) return setShow(false);
    addParam("search", data, params, router);
  };
  return (
    <div className="hidden text-12sm text-main tablet:block tablet:text-14sm">
      {!show && (
        <IoSearch
          className="cursor-pointer text-[24px]"
          onClick={() => setShow(true)}
        />
      )}
      {show && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex w-[241px] items-center gap-1 rounded border border-main px-2 py-1 transition-all duration-200 tablet:w-[280px]"
        >
          <IoIosClose
            className="cursor-pointer text-[24px]"
            onClick={() => {
              setValue("search", "");
              router.replace(window.location.pathname, { scroll: false });
              setShow(false);
            }}
          />

          <input
            {...register("search")}
            type="text"
            className="bg-transparent outline-none placeholder:text-main"
            placeholder="Search"
          />
        </form>
      )}
    </div>
  );
}
