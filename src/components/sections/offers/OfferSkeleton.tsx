import Container from "@/components/Container";
import React from "react";
import OfferText from "./OfferText";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { nanoid } from "nanoid";
import ActivitySkeleton from "@/components/skeletons/ActivitySkeleton";
import { FaCircle } from "react-icons/fa";

export default function OfferSkeleton() {
  return (
    <section className="py-[48px] tablet:py-[70px]">
      <Container>
        <OfferText />
        {/* Progress Bar */}
        <section className="laptop:flexBetween mt-5 hidden gap-10">
          <div className="grid h-[2px] w-[676px] grid-cols-4 bg-secondLightHover laptop:w-[1086.316px]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={i === 0 ? "bg-main" : ""}></div>
            ))}
          </div>
          <div className="laptop:flexCenter hidden gap-[20px]">
            {/* Left Arrow */}
            <div className="grid h-[64px] w-[64px] cursor-pointer place-content-center rounded-full bg-secondLight text-[30px] text-main transition-all duration-75 hover:bg-main hover:text-white">
              <RiArrowLeftSLine />
            </div>
            {/* Right Arrow */}
            <div className="grid h-[64px] w-[64px] cursor-pointer place-content-center rounded-full bg-secondLight text-[30px] text-main transition-all duration-75 hover:bg-main hover:text-white">
              <RiArrowRightSLine />
            </div>
          </div>
        </section>
      </Container>

      <section className="flex flex-col space-y-[22px] overflow-hidden">
        <Container>
          <div className="mt-[48px] flex cursor-grab items-start gap-5 tablet:mt-6 laptop:mt-[57px]">
            <div className="flex gap-5 overflow-hidden">
              {Array.from({ length: 2 }).map((_, i) => (
                <ActivitySkeleton key={nanoid()} />
              ))}
            </div>
          </div>
        </Container>

        <section className="tablet:flexBetween mt-5 hidden gap-10 self-center tablet:block laptop:hidden">
          <div className="grid h-[2px] w-[676px] grid-cols-4 bg-secondLightHover laptop:w-[1086.316px]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={i === 0 ? "bg-main" : ""}></div>
            ))}
          </div>
        </section>

        {/* Pagination Dots */}
        <div className="flexCenter mx-auto gap-[2px] tablet:hidden">
          {[...Array(4)].map((_, i) => (
            <FaCircle
              key={i}
              className={`cursor-pointer text-[10px] ${
                i === 0 ? "text-main" : "text-neutralLightActive"
              }`}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
