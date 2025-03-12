"use client";

import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const [show, setShow] = useState(false);
  return (
    <div className="hidden text-12sm text-main tablet:block tablet:text-14sm">
      {!show && (
        <IoSearch
          className="cursor-pointer text-[24px]"
          onClick={() => setShow(true)}
        />
      )}
      {show && (
        <div className="flex w-[241px] items-center gap-1 rounded border border-main px-2 py-1 transition-all duration-200 tablet:w-[280px] tablet:px-3">
          {
            <IoIosClose
              className="cursor-pointer text-[24px]"
              onClick={() => setShow(false)}
            />
          }

          <input
            type="text"
            className="bg-transparent outline-none placeholder:text-main"
            placeholder="Search"
          />
        </div>
      )}
    </div>
  );
}
