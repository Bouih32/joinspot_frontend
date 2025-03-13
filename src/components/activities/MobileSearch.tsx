"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Button from "../Button";
import { addParam, cn } from "@/libs/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchT } from "./Search";
import { searchValidation } from "@/libs/validation";

type MobileFilterProps = {
  handleSearch: () => void;
  handleClose: () => void;
};

export default function MobileSearch({
  handleSearch,
  handleClose,
}: MobileFilterProps) {
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

  const handleSubmit = async () => {
    const result = await trigger();
    if (!result) return setValue("search", "Ooops , that's alot !!");
    const data = getValues("search");
    if (!data) return setShow(false);
    addParam("search", data, params, router);
  };
  const handleOpen = () => {
    handleSearch();
    setShow(true);
  };
  return (
    <div
      className={cn("text-12sm text-main tablet:text-14sm", show && "w-full")}
    >
      {!show && (
        <IoSearch className="cursor-pointer text-[24px]" onClick={handleOpen} />
      )}
      {show && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flexBetween"
        >
          <div className="flex w-[241px] items-center gap-2 rounded border border-main px-2 py-1 tablet:w-[280px] tablet:px-3">
            <IoSearch
              className="cursor-pointer text-[18px]"
              onClick={() => handleSubmit()}
            />
            <input
              {...register("search")}
              type="text"
              className="flex-grow bg-transparent outline-none placeholder:text-main"
              placeholder="Search"
            />
          </div>

          <div
            onClick={() => {
              handleClose();
              setShow(false);
            }}
            className="flexCenter w-fit cursor-pointer gap-2 rounded bg-main px-3 py-[3px] font-openSans text-14xl text-white outline-none disabled:pointer-events-none disabled:bg-secondLightActive tablet:px-4 tablet:py-[6px]"
          >
            Cancel
          </div>
          {/* <Button>Cancel</Button> */}
        </form>
      )}
    </div>
  );
}
