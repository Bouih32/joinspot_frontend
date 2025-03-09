"use client";

import { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import SubTitle from "../SubTitle";
import Title from "../Title";
import ReviewCard from "./ReviewCard";
import { nanoid } from "nanoid";
import { cn } from "@/libs/utils";
import { reviewsData } from "@/libs/constantes";
import { useMediaQuery } from "react-responsive";

export default function Community() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const motionValue = useMotionValue(0); // Track the carousel's position
  const cardWidth = 328; // Width of each card (matches ReviewCard's min-width)
  const gap = 20; // Gap between cards
  const totalWidth = cardWidth + gap;
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Total width for each card including gap

  // Function to handle drag end
  const handleDragEnd = () => {
    const currentX = motionValue.get();
    const newIndex = Math.round(-currentX / totalWidth);

    // Ensure the index stays within bounds
    const clampedIndex = Math.max(
      0,
      Math.min(newIndex, reviewsData.length - 1),
    );
    setCurrentIndex(clampedIndex);

    // Animate to the new position
    animate(motionValue, -clampedIndex * totalWidth, {
      type: "spring",
      stiffness: 100,
      damping: 20,
    });
  };

  return (
    <section className="flex flex-col gap-[30px] overflow-hidden bg-secondLight py-[48px] pl-4 tablet:flex-row tablet:gap-[63px] tablet:py-[70px] laptop:gap-[106px] xl:pl-20">
      <section className="space-y-3 text-center tablet:w-[356px] tablet:space-y-[32px] tablet:text-start">
        <Title>
          What Our <br className="hidden tablet:block" /> Community Says
        </Title>
        <SubTitle classname="tablet:w-[356px]">
          You're welcome! Here’s a clean and engaging <br /> Review Section for
          <span className="font-bold"> JoinSpot.</span>
        </SubTitle>
      </section>
      <section className="flex flex-col gap-4">
        {/* Draggable Carousel */}
        <div className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{
              left: -(reviewsData.length - (isMobile ? 1 : 2)) * totalWidth, // Prevent dragging beyond the last card
              right: 0, // Prevent dragging beyond the first card
            }}
            dragElastic={0.1} // Add slight elasticity for a natural feel
            onDragEnd={handleDragEnd}
            style={{ x: motionValue }}
            className="flex cursor-grab gap-5 tablet:gap-10"
          >
            {reviewsData.map((ele) => (
              <motion.div
                key={nanoid()}
                className="flex-shrink-0"
                style={{ width: cardWidth }}
              >
                <ReviewCard
                  category={ele.category}
                  name={ele.name}
                  text={ele.text}
                  stars={ele.stars}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flexCenter gap-2 tablet:gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={nanoid()}
              className={cn(
                "h-2 w-2 cursor-pointer rounded-full bg-neutralLightActive tablet:h-[11px] tablet:w-[11px]",
                index === currentIndex &&
                  "h-3 w-3 bg-main tablet:h-[14px] tablet:w-[14px]",
              )}
              onClick={() => {
                setCurrentIndex(index);
                animate(motionValue, -index * totalWidth, {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                });
              }}
            ></div>
          ))}
        </div>
      </section>
    </section>
  );
}
