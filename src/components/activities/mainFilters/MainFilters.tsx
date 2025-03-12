"use client";

import { MdChair } from "react-icons/md";
import DatePick from "./DatePick";
import { useRef, useState } from "react";

export default function MainFilters() {
  const [value, setValue] = useState(2);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const rect = track.getBoundingClientRect();
    let newValue = ((e.clientX - rect.left) / rect.width) * 100;
    newValue = Math.max(2, Math.min(100, Math.round(newValue / 10) * 10)); // Snap to increments of 10
    setValue(newValue);
  };

  const startDragging = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDragging);
  };

  const stopDragging = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", stopDragging);
  };
  return (
    <div className="shadow-6xl space-y-[14px] rounded-[8px] border border-secondLightActive p-4 tablet:px-4 tablet:py-[32px] laptop:space-y-4">
      <div className="space-y-3">
        <p className="tablet:text-16sm">Select by date:</p>
        <div className="flexBetween flex-col gap-2 tablet:flex-row tablet:gap-4">
          <DatePick />
          <DatePick />
        </div>
      </div>
      <div className="space-y-4 tablet:space-y-3">
        <p className="tablet:text-16sm">Select by number of seats:</p>
        <div className="flexBetween">
          <div
            ref={trackRef}
            className="relative h-[3px] w-[367px] cursor-pointer rounded-[14px] bg-secondLightActive"
            onMouseDown={(e) => handleMouseMove(e.nativeEvent)}
          >
            {/* Active filled part */}
            <div
              className="absolute h-full rounded-[14px] bg-main transition-all duration-75"
              style={{ width: `${value}%` }}
            />

            {/* Draggable Thumb */}
            <span
              className="absolute top-0 grid h-[21px] w-[29px] -translate-y-[50%] cursor-pointer select-none place-content-center rounded bg-main text-12xl text-white transition-transform hover:scale-110"
              style={{ left: `calc(${value}% - 14px)` }} // Adjust for center alignment
              onMouseDown={startDragging}
            >
              {Math.round((value / 100) * 10) + 1}
              {/* Convert value to a 1-11 range */}
            </span>
          </div>
          <MdChair className="text-[20px] text-second" />
        </div>
      </div>
    </div>
  );
}
