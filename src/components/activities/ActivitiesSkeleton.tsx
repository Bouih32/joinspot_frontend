import React from "react";
import ActivitySkeleton from "../skeletons/ActivitySkeleton";
import { nanoid } from "nanoid";

export default function () {
  return (
    <div className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
      {Array.from({ length: 10 }).map(() => (
        <ActivitySkeleton key={nanoid()} full />
      ))}
    </div>
  );
}
