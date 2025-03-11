"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Button from "../Button";
import { cn } from "@/libs/utils";

type MobileFilterProps = {
  handleSearch: () => void;
  handleClose: () => void;
};

export default function MobileSearch({
  handleSearch,
  handleClose,
}: MobileFilterProps) {
  const [show, setShow] = useState(false);
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
        <div className="flexBetween">
          <div className="flex w-[241px] items-center gap-2 rounded border border-main px-2 py-1 tablet:w-[280px] tablet:px-3">
            <IoSearch className="cursor-pointer text-[18px]" />
            <input
              type="text"
              className="bg-transparent outline-none placeholder:text-main"
              placeholder="Search"
            />
          </div>
          <div
            onClick={() => {
              handleClose();
              setShow(false);
            }}
          >
            <Button>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
}
