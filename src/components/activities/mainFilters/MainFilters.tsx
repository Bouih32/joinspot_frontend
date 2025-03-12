"use client";

import { MdChair } from "react-icons/md";
import DatePick from "./DatePick";
import { useRef, useState } from "react";

export default function MainFilters() {
  const [value, setValue] = useState(0); // Start at 0
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const rect = track.getBoundingClientRect();
    let newValue = ((e.clientX - rect.left) / rect.width) * 50; // Scale to max 50

    newValue = Math.round(newValue / 10) * 10; // Snap to nearest 10 (0,10,20...)
    newValue = Math.max(0, Math.min(50, newValue)); // Clamp between 0-50
    setValue(newValue);
  };

  const startDragging = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDragging);
  };

  const stopDragging = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", stopDragging);
  };
  return (
    <div className="space-y-[14px] rounded-[8px] border border-secondLightActive p-4 shadow-6xl tablet:px-4 tablet:py-[32px] laptop:space-y-4">
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
            className="relative h-[3px] w-[175px] cursor-pointer select-none rounded-[14px] bg-secondLightActive tablet:w-[367px]"
            onMouseDown={(e) => handleMouseMove(e.nativeEvent)}
          >
            {/* Filled Track */}
            <div
              className="absolute h-full rounded-[14px] bg-main transition-all duration-75"
              style={{ width: `${(value / 50) * 100}%` }} // Scale width dynamically
            />

            {/* Draggable Thumb */}
            <span
              className="absolute top-0 grid h-5 w-5 -translate-y-[50%] cursor-pointer select-none place-content-center rounded bg-main text-12xl text-white transition-transform hover:scale-110 tablet:h-[21px] tablet:w-[29px]"
              style={{
                left: `calc(${(value / 50) * 100}% - ${value > 0 ? "14px" : "0px"})`,
              }} // Move thumb accordingly
              onMouseDown={startDragging}
            >
              {value}
            </span>
          </div>
          <MdChair className="text-[20px] text-second" />
        </div>
      </div>
    </div>
  );
}
