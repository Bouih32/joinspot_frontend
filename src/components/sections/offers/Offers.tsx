"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Container from "@/components/Container";
import SubTitle from "../SubTitle";
import Title from "../Title";
import Link from "next/link";
import Button from "@/components/Button";
import ActivityCard from "@/components/activities/ActivityCard";
import { FaCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function Offers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // State to track if component has mounted
  const motionValue = useMotionValue(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Adjust these based on actual card width + gap
  const itemWidth = isMobile ? 350 : 480; // Adjust to match your actual `ActivityCard` width + gap
  const totalSlides = 4;
  const maxDrag = -((totalSlides - 1) * itemWidth);

  // Track progress dynamically
  const progress = useTransform(
    motionValue,
    [maxDrag, 0],
    [totalSlides - 1, 0],
  );

  useEffect(() => {
    setIsClient(true); // Set isClient to true after component mounts
  }, []);

  useEffect(() => {
    return progress.onChange((latest) => {
      setCurrentIndex(Math.round(latest));
    });
  }, [progress]);

  // Function to handle left arrow click
  const handlePrevClick = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    setCurrentIndex(newIndex);
    animate(motionValue, -newIndex * itemWidth, {
      type: "spring",
      stiffness: 100,
    });
  };

  // Function to handle right arrow click
  const handleNextClick = () => {
    const newIndex =
      currentIndex < totalSlides - 1 ? currentIndex + 1 : totalSlides - 1;
    setCurrentIndex(newIndex);
    animate(motionValue, -newIndex * itemWidth, {
      type: "spring",
      stiffness: 100,
    });
  };

  if (!isClient) {
    return null; // Return null or a loading state during SSR
  }

  return (
    <section className="py-[48px] tablet:py-[70px]">
      <Container>
        <section className="flex flex-col items-center justify-between gap-3 text-center tablet:items-start tablet:text-start laptop:flex-row">
          <div className="space-y-3">
            <Title>Top offers</Title>
            <SubTitle classname="tablet:w-full">
              Discover the most exciting activities happening around you!
              Whether you're into adventure, wellness, or social meetups,
              there's something for everyone!
            </SubTitle>
          </div>
          <Link href="#" className="tablet:self-end laptop:self-center">
            <Button secondary>Show all offers</Button>
          </Link>
        </section>
        {/* Progress Bar */}
        <section className="tablet:flexBetween mt-5 hidden gap-10">
          <div className="grid h-[2px] w-[676px] grid-cols-4 bg-secondLightHover laptop:w-[1086.316px]">
            {[...Array(totalSlides)].map((_, i) => (
              <div
                key={i}
                className={i === currentIndex ? "bg-main" : ""}
              ></div>
            ))}
          </div>
          <div className="laptop:flexCenter hidden gap-[20px]">
            {/* Left Arrow */}
            <div
              className="grid h-[64px] w-[64px] cursor-pointer place-content-center rounded-full bg-secondLight text-[30px] text-main transition-all duration-75 hover:bg-main hover:text-white"
              onClick={handlePrevClick}
            >
              <RiArrowLeftSLine />
            </div>
            {/* Right Arrow */}
            <div
              className="grid h-[64px] w-[64px] cursor-pointer place-content-center rounded-full bg-secondLight text-[30px] text-main transition-all duration-75 hover:bg-main hover:text-white"
              onClick={handleNextClick}
            >
              <RiArrowRightSLine />
            </div>
          </div>
        </section>
      </Container>

      <section className="space-y-[22px]">
        {/* Framer Motion Horizontal Drag Carousel */}
        <div className="overflow-hidden">
          <motion.div className="ml-4 mt-[48px] flex cursor-grab items-start gap-5 tablet:mt-6 laptop:mt-[57px] xl:ml-20">
            <motion.div
              drag="x"
              dragConstraints={{ left: maxDrag, right: 0 }}
              className="flex gap-5"
              style={{ x: motionValue }}
            >
              {[...Array(totalSlides)].map((_, i) => (
                <ActivityCard key={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flexCenter mx-auto gap-[2px] tablet:hidden">
          {[...Array(totalSlides)].map((_, i) => (
            <FaCircle
              key={i}
              className={`cursor-pointer text-[10px] ${
                i === currentIndex ? "text-main" : "text-neutralLightActive"
              }`}
              onClick={() => {
                setCurrentIndex(i);
                animate(motionValue, -i * itemWidth, {
                  type: "spring",
                  stiffness: 100,
                });
              }}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
