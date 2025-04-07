"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import Container from "../../Container";
import HeroFilter from "./HeroFilter";
import { FaCircle } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import ActivityCard, {
  ActivityCardType,
} from "@/components/activities/ActivityCard";

type HeroProps = { data: ActivityCardType[] };

export default function Hero({ data }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // State to track if component has mounted
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const motionAxis = isMobile ? "x" : "y";
  const motionValue = useMotionValue(0);

  // Adjust these based on actual dimensions
  const itemSize = isMobile ? 340 : 220; // Width for mobile, height for larger screens
  const totalSlides = 4;
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

  // Function to handle drag end
  const handleDragEnd = () => {
    const currentPosition = motionValue.get();
    const newIndex = Math.round(-currentPosition / itemSize);

    // Allow slight overdrag but animate back
    const clampedIndex = Math.max(
      -0.2,
      Math.min(newIndex, totalSlides - 1 + 0.2),
    );

    animate(motionValue, -clampedIndex * itemSize, {
      type: "spring",
      stiffness: 150,
      damping: 20,
    });

    setCurrentIndex(Math.round(clampedIndex)); // Ensure UI updates correctly
  };

  if (!isClient) {
    return null; // Return null or a loading state during SSR
  }

  return (
    <section className="overflow-hidden bg-heroBg bg-cover bg-top bg-no-repeat py-[34px] tablet:h-[570px] tablet:bg-left">
      <Container classname="tablet:pt-[70px] pt-[34px]  pb-0">
        <section className="flex w-full flex-col items-start space-y-[25px] justify-self-end tablet:w-fit tablet:items-center">
          <HeroFilter />

          {/* Framer Motion Adaptive Carousel */}
          <motion.div className="relative flex w-full cursor-grab select-none overflow-x-hidden tablet:overflow-y-hidden">
            <motion.div
              drag={motionAxis}
              dragConstraints={{
                [motionAxis === "x" ? "left" : "top"]: maxDrag - itemSize * 0.2,
                [motionAxis === "x" ? "right" : "bottom"]: itemSize * 0.2,
              }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className={`flex touch-none select-none ${isMobile ? "gap-2.5" : "tablet:flex-col tablet:gap-5"}`}
              style={{
                [motionAxis]: motionValue,
                touchAction: motionAxis === "x" ? "pan-y" : "pan-x", // disables scrolling in drag direction
              }}
            >
              {data.slice(0, totalSlides).map((ele, i) => (
                <ActivityCard key={i} data={ele} />
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
                  setCurrentIndex(i);
                  animate(motionValue, -i * itemSize, {
                    type: "spring",
                    stiffness: 100,
                    damping: 20, // Add damping for smoother animation
                  });
                }}
              />
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
