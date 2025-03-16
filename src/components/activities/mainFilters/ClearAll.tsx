"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function ClearAll() {
  const router = useRouter();
  const params = useSearchParams();
  const hasParams = Array.from(params.entries()).length > 0;
  console.log(hasParams);
  return (
    <>
      {hasParams ? (
        <div
          className="text-12xxl flexCenter cursor-pointer gap-[6px] self-end rounded bg-mainLightHover px-2 py-1 text-main"
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
