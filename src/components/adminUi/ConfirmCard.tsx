import { avatarPlaceholder } from "@/libs/constantes";
import React from "react";

export default function ConfirmCard() {
  return (
    <div className="rounded-[8px] bg-[#F8F8F8] px-3 py-3 tablet:py-2">
      <div className="flex flex-1 items-center gap-3 text-12lg text-neutral tablet:text-14lg laptop:text-16lg">
        <div
          style={{
            backgroundImage: `url(${avatarPlaceholder})`,
          }}
          className="h-[28px] w-[28px] rounded-full bg-red-300 bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="line-clamp-1 w-[100px] overflow-hidden text-nowrap text-14lg text-neutralDarkHover tablet:w-[400px] laptop:text-16lg">
          User’s Name requests to be an organizer in{" "}
          <span className="font-semibold text-main">Sport</span>
        </p>
      </div>
      <div className=""></div>
    </div>
  );
}
