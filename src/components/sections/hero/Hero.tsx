"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ActivityCard from "@/components/activities/ActivityCard";
import Container from "../../Container";
import HeroFilter from "./HeroFilter";
import { FaCircle } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // State to track if component has mounted
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const motionAxis = isMobile ? "x" : "y";
  const motionValue = useMotionValue(0);

  // Adjust these based on actual dimensions
  const itemSize = isMobile ? 300 : 220; // Width for mobile, height for larger screens
  const totalSlides = 5;
  const maxDrag = -((totalSlides - 1) * itemSize);

  // Dynamically track current index
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

  if (!isClient) {
    return null; // Return null or a loading state during SSR
  }

  return (
    <section className="bg-fit overflow-hidden bg-heroBg bg-top bg-no-repeat py-[34px] tablet:h-[570px] tablet:bg-left">
      <Container classname="tablet:pt-[70px] pt-[34px] pb-0">
        <section className="flex w-full flex-col items-start space-y-[25px] justify-self-end tablet:w-fit tablet:items-center">
          <HeroFilter />

          {/* Framer Motion Adaptive Carousel */}
          <motion.div className="relative flex w-full cursor-grab overflow-hidden">
            <motion.div
              drag={motionAxis}
              dragConstraints={{
                [motionAxis === "x" ? "left" : "top"]: maxDrag,
                [motionAxis === "x" ? "right" : "bottom"]: 0,
              }}
              dragElastic={0.1} // Add slight elasticity for a natural feel
              className={`flex ${isMobile ? "gap-2.5" : "tablet:flex-col tablet:gap-5"}`}
              style={{ [motionAxis]: motionValue }}
            >
              {[...Array(totalSlides)].map((_, i) => (
                <ActivityCard key={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flexCenter mx-auto gap-[2px] tablet:hidden">
            {[...Array(totalSlides)].map((_, i) => (
              <FaCircle
                key={i}
                className={`cursor-pointer text-[10px] ${
                  i === currentIndex ? "text-main" : "text-white"
                }`}
                onClick={() => {
                  const targetPosition = -i * itemSize;
                  motionValue.set(targetPosition); // Instantly move to the target position
                }}
              />
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
