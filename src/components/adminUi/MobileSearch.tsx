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

export default function MobileSearch() {
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
    if (!data) return;
    addParam("search", data, params, router);
  };
  return (
    <div className="text-14sm text-main tablet:hidden">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex w-full items-center gap-1 rounded border border-main px-2 py-1 transition-all duration-200"
      >
        {
          <IoSearch
            className="cursor-pointer text-[20px]"
            onClick={() => handleSearch()}
          />
        }

        <input
          {...register("search")}
          type="text"
          className="bg-transparent outline-none placeholder:text-main"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
