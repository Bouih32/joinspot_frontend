"use client";

import Button from "@/components/Button";
import { cn } from "@/libs/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SelectStar from "./SelectStar";

type ReviewButtonProps = {
  role?: string | null;
};
export default function ReviewButton({ role }: ReviewButtonProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (open) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  const handleAdd = () => {
    if (!role || role === "VISITOR") {
      setOpen(true);
    } else router.push("/activities/add");
  };

  return (
    <div className="">
      <div onClick={handleAdd} className="flex tablet:justify-end">
        <Button secondary>Share Your Experience</Button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[800] grid cursor-pointer place-content-center bg-white/50"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-[329px] w-[259px] flex-col gap-3 rounded-[8px] bg-white px-4 py-4 text-12lg text-second shadow-8xl tablet:h-[336px] tablet:w-[540px] tablet:gap-6 tablet:rounded-xl tablet:px-5 tablet:py-[30px] tablet:text-16lg"
          >
            <h3 className="text-16xxl text-main tablet:text-20xxl">
              Share your experience with [Activity Name]
            </h3>
            <div className="flexBetween">
              <p>Rate this Activity</p>
              <SelectStar />
            </div>
            <div className="">
              <p>Your Review</p>
              <p className="font-normal text-darker">
                Tell us what you loved (or what could be improved)!
              </p>
            </div>

            <div className="flexCenter gap-2 self-end">
              <Button secondary>Submit</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
