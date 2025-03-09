"use client";

import { useState } from "react";
import SubTitle from "../SubTitle";
import Title from "../Title";
import ReviewCard from "./ReviewCard";
import { nanoid } from "nanoid";
import { cn, shuffleArray } from "@/libs/utils";
import { reviewsData } from "@/libs/constantes";

export default function Community() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState(reviewsData);

  // Function to handle pagination dot clicks
  const handleDotClick = (index: number) => {
    // Shuffle the array
    const shuffledReviews = [...reviews];
    const firstItem = shuffledReviews.shift(); // Remove the first item
    firstItem && shuffledReviews.push(firstItem); // Add it to the end

    // Update the reviews array and currentIndex
    setReviews(shuffledReviews);
    setCurrentIndex(index);
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
      <section className="flex flex-col">
        {/* Review Cards */}
        <div className="flex gap-5">
          {reviews.map((ele, index) => (
            <ReviewCard
              key={nanoid()}
              big={index === 0} // Make the first card bigger
              category={ele.category}
              name={ele.name}
              text={ele.text}
              stars={ele.stars}
            />
          ))}
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
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </section>
    </section>
  );
}
