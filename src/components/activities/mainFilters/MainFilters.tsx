"use client";

import { MdChair } from "react-icons/md";

import { useRef, useState } from "react";
import Button from "@/components/Button";
import DateFilter from "./DateFilter";
import { IoFilter } from "react-icons/io5";
import { addParam } from "@/libs/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function MainFilters({ mobile }: { mobile?: boolean }) {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const params = useSearchParams();
  const router = useRouter();

  const handleMouseMove = (e: MouseEvent) => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const rect = track.getBoundingClientRect();
    let newValue = ((e.clientX - rect.left) / rect.width) * 50; // Scale to max 50

    newValue = Math.round(newValue / 10) * 10; // Snap to nearest 10 (0,10,20...)
    newValue = Math.max(0, Math.min(50, newValue)); // Clamp between 0-50
    setValue(newValue);
  };

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDragging);

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", stopDragging);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault(); // Stop scrolling while dragging

    if (!trackRef.current) return;

    const track = trackRef.current;
    const rect = track.getBoundingClientRect();
    let newValue = ((e.touches[0].clientX - rect.left) / rect.width) * 50;

    newValue = Math.round(newValue / 10) * 10;
    newValue = Math.max(0, Math.min(50, newValue));
    setValue(newValue);
  };

  const stopDragging = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", stopDragging);
  };

  return (
    <div className="relative flex flex-col">
      {mobile ? (
        <div
          className="grid h-[30px] w-[30px] cursor-pointer place-content-center rounded-full bg-secondHover text-white tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:bg-transparent tablet:text-main"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoFilter className="cursor-pointer text-[16px] tablet:text-[24px]" />
        </div>
      ) : (
        <div
          className="hidden h-[30px] w-[30px] cursor-pointer place-content-center self-end rounded-full bg-secondHover text-white tablet:grid tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:bg-transparent tablet:text-main"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoFilter className="z-[500] cursor-pointer text-[16px] tablet:text-[24px]" />
        </div>
      )}

      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-white/50"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute right-0 top-[120%] z-[500] flex w-[260px] flex-col gap-[14px] rounded-[8px] border border-secondLightActive bg-white p-4 shadow-6xl tablet:w-[440px] tablet:px-4 tablet:py-[32px] laptop:gap-4">
            <DateFilter />
            <div className="space-y-4 tablet:space-y-3">
              <p className="text-darker tablet:text-16sm">
                Select by number of seats:
              </p>
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
                    }}
                    onMouseDown={startDragging}
                    onTouchStart={startDragging} // Add touch support
                  >
                    {value}
                  </span>
                </div>
                <MdChair className="text-[20px] text-second" />
              </div>
            </div>
            <div className="flexCenter gap-2.5 self-end">
              <div
                onClick={() => {
                  router.replace(window.location.pathname, { scroll: false });
                  setOpen(false);
                }}
              >
                <Button secondary>Clear All</Button>
              </div>
              <div
                onClick={() => {
                  value > 0 &&
                    addParam("seats", value.toString(), params, router);
                  setOpen(false);
                }}
              >
                <Button>Apply</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
