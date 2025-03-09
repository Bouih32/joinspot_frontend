"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Container from "@/components/Container";
import UniqueCard from "./UniqueCard";
import { values } from "@/libs/constantes";
import { nanoid } from "nanoid";

export default function Unique() {
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile
  const motionValue = useMotionValue(0);

  // Adjust these based on actual card width + gap
  const itemWidth = 300; // Width of each card (adjust to match your actual card width)
  const cardGap = 16; // Gap between cards (adjust to match your actual gap)
  const totalWidth = (values.length - 1) * (itemWidth + cardGap); // Total scrollable width

  // Function to handle drag end
  const handleDragEnd = () => {
    const currentX = motionValue.get();
    const newIndex = Math.round(-currentX / (itemWidth + cardGap));

    // Ensure the index stays within bounds
    const clampedIndex = Math.max(0, Math.min(newIndex, values.length - 1));

    // Animate to the new position
    animate(motionValue, -clampedIndex * (itemWidth + cardGap), {
      type: "spring",
      stiffness: 100,
      damping: 20, // Add damping for smoother animation
    });
  };

  // Check if the screen is mobile on the client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust breakpoint as needed
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="bg-lines bg-cover bg-center bg-no-repeat py-[32px] tablet:py-[52px]">
      <Container classname="tablet:space-y-[35px] space-y-4 justify-between items-center flex flex-col tablet:flex-row laptop:flex-col">
        <h3 className="title self-start text-main tablet:self-center laptop:self-start">
          What Makes <br className="hidden tablet:block laptop:hidden" />
          JoinSpot Unique?
        </h3>

        {/* Mobile: Draggable Carousel */}
        {isMobile ? (
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex"
              style={{ x: motionValue }}
              drag="x"
              dragConstraints={{ left: -totalWidth, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
            >
              {values.map((ele) => (
                <motion.div
                  key={nanoid()}
                  className="flex-shrink-0"
                  style={{ width: itemWidth, marginRight: cardGap }} // Set width and gap
                >
                  <UniqueCard para={ele.para} title={ele.title} value />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          // Tablet/Desktop: Grid Layout
          <section className="flex grid-cols-2 flex-col flex-wrap justify-center gap-2.5 tablet:grid tablet:gap-3 laptop:flex laptop:flex-row laptop:gap-[30px]">
            {values.map((ele) => (
              <UniqueCard
                key={nanoid()}
                para={ele.para}
                title={ele.title}
                value
              />
            ))}
          </section>
        )}
      </Container>
    </section>
  );
}
