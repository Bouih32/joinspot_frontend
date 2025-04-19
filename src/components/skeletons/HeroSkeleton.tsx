import React from "react";
import Container from "../Container";
import CategorySkeleton from "./CategorySkeleton";
import ActivitySkeleton from "./ActivitySkeleton";
import { FaCircle } from "react-icons/fa";

export default function HeroSkeleton() {
  return (
    <section className="overflow-hidden bg-heroBg bg-cover bg-top bg-no-repeat py-[34px] tablet:h-[570px] tablet:bg-left">
      <Container classname="tablet:pt-[70px] pt-[34px]  pb-0">
        <section className="flex w-full flex-col items-start space-y-[25px] justify-self-end tablet:w-fit tablet:items-center">
          <CategorySkeleton />

          {/* Framer Motion Adaptive Carousel */}
          <div className="relative flex w-full cursor-grab select-none tablet:overflow-y-hidden">
            <div className="flex touch-none select-none gap-2.5 tablet:flex-col tablet:gap-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <ActivitySkeleton key={i} />
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flexCenter mx-auto gap-[2px] tablet:hidden">
            {[...Array(4)].map((_, i) => (
              <FaCircle key={i} className="text-white" />
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
