"use client";

import { addParam, cn } from "@/libs/utils";
import { JwtPayload } from "jsonwebtoken";
import { useRouter, useSearchParams } from "next/navigation";

import {
  FaBookmark,
  FaQuestionCircle,
  FaRegBookmark,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { MdChatBubble, MdChatBubbleOutline } from "react-icons/md";

type LowerFilterProps = {
  filter: string;
  token: string | JwtPayload | null;
};

export default function LowerFilter({ filter, token }: LowerFilterProps) {
  const params = useSearchParams();
  const router = useRouter();
  const my = params.get("my");

  const handleFilter = () => {
    filter === "own" && !token
      ? router.push("/login")
      : addParam("my", filter, params, router);
  };
  return (
    <div
      className={cn(
        "group grid h-[50px] w-[50px] cursor-pointer place-content-center rounded hover:bg-white",
        my === filter && "bg-white",
      )}
      onClick={handleFilter}
    >
      {filter === "save" && (
        <>
          <FaRegBookmark
            className={cn("group-hover:hidden", my === filter && "hidden")}
          />
          <FaBookmark
            className={cn("hidden group-hover:block", my === filter && "block")}
          />
        </>
      )}

      {filter === "own" && (
        <>
          <MdChatBubbleOutline
            className={cn("group-hover:hidden", my === filter && "hidden")}
          />
          <MdChatBubble
            className={cn("hidden group-hover:block", my === filter && "block")}
          />
        </>
      )}

      {filter === "faq" && (
        <>
          <FaRegQuestionCircle
            className={cn("group-hover:hidden", my === filter && "hidden")}
          />
          <FaQuestionCircle
            className={cn("hidden group-hover:block", my === filter && "block")}
          />
        </>
      )}
    </div>
  );
}
