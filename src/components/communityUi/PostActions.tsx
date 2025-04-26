"use client";

import Comments from "./Comments";
import Likes from "./Likes";
import Save from "./Save";

export default function PostActions() {
  return (
    <div className="flexBetween text-12xxl text-neutral laptop:text-14xxl">
      <div className="flex items-center gap-[14px]">
        <Likes /> <Comments />
      </div>
      <Save />
    </div>
  );
}
