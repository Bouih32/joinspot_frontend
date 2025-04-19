"use client";

import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";

import { MdOutlineIosShare } from "react-icons/md";

export default function ShareActivity({ activityId }: { activityId: string }) {
  const [open, setOpen] = useState(false);
  const link = `https://www.joinspots.com/activities/${activityId}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };
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

  return (
    <div className="">
      <MdOutlineIosShare
        className="cursor-pointer text-[24px] text-neutralLightActive hover:text-main"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 z-[800] grid cursor-pointer place-content-center bg-white/50"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-[259px] cursor-default flex-col gap-4 rounded-[8px] bg-white px-4 py-4 text-14lg text-second shadow-8xl tablet:w-[320px] tablet:rounded-xl tablet:px-5 tablet:py-[30px] tablet:text-16lg"
          >
            <h3 className="text-16xxl text-main tablet:text-20xxl">
              Share this post with others!
            </h3>
            <div className="space-y-3">
              <p>
                Spread the word! Copy the link below or share it on social media
                so others can check out this post.
              </p>
            </div>

            <div className="flexBetween gap-3 rounded border border-second px-3 py-[6px]">
              <p className="line-clamp-1 w-full overflow-hidden text-14lg text-main">
                {link}
              </p>
              <FaRegCopy
                className="cursor-pointer hover:text-main"
                onClick={handleCopy}
              />
            </div>

            <section className="grid grid-cols-3 gap-2">
              <div className="flexCenter rounded bg-[#2463EB] px-3 py-[6px] text-14xl text-white">
                <p> Facebook</p>
              </div>
              <div className="flexCenter rounded bg-[#22C55D] px-3 py-[6px] text-14xl text-white">
                <p> Whatsapp</p>
              </div>
              <div className="flexCenter rounded bg-[#FCAF45] px-3 py-[6px] text-14xl text-white">
                <p> Instagram</p>
              </div>
            </section>

            <div
              onClick={(e) => {
                setOpen(false);
              }}
            >
              <Button classname="w-full">Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
