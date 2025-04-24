"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function ClearAll() {
  const router = useRouter();
  const params = useSearchParams();
  const paramEntries = Array.from(params.entries());
  const hasParams = paramEntries.some(([key]) => key !== "page");

  return (
    <>
      {hasParams ? (
        <div
          className="flexCenter cursor-pointer gap-[6px] self-end rounded bg-mainLightHover px-2 py-1 text-12xxl text-main"
          onClick={() => {
            router.replace(window.location.pathname, { scroll: false });
          }}
        >
          <p>Clear all filters</p>
          <RxCross2 />
        </div>
      ) : null}
    </>
  );
}
