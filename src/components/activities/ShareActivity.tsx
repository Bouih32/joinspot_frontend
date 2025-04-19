"use client";

import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { FaRegCopy, FaRegShareSquare } from "react-icons/fa";

import { MdOutlineIosShare } from "react-icons/md";

export default function ShareActivity({
  activityId,
  details,
}: {
  activityId: string;
  details?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const link = `https://www.joinspots.com/activities/${activityId}`;
  const encodedUrl = encodeURIComponent(link);
  const encodedText = encodeURIComponent(
    "🚀 Don’t miss out on this awesome experience! Tap the link and join the fun – it’s gonna be unforgettable! 🎉🔥",
  );

  const handleFacebookShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(shareUrl, "_blank");
  };

  const handleWhatsAppShare = () => {
    const shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
    window.open(shareUrl, "_blank");
  };
  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
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
      {details ? (
        <div
          onClick={() => setOpen(true)}
          className="z-40 w-fit cursor-pointer rounded-md bg-white p-[5px] text-main"
        >
          <FaRegShareSquare />
        </div>
      ) : (
        <MdOutlineIosShare
          className="cursor-pointer text-[24px] text-neutralLightActive hover:text-main"
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <div
          className="fixed inset-0 z-[800] grid cursor-pointer place-content-center bg-white/50"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-[259px] cursor-default flex-col gap-4 rounded-[8px] bg-white px-4 py-4 text-14lg text-second shadow-8xl tablet:w-[320px] tablet:rounded-xl tablet:px-5 tablet:py-[30px] tablet:text-16lg"
          >
            {copy && (
              <div className="w-full rounded border border-success bg-successHover px-5 py-1 text-center text-12xxl text-success tablet:text-12xxl">
                <p className="text-center">
                  Link Copied! Share it anywhere and invite others to JoinSpot!
                </p>
              </div>
            )}
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

            <section className="grid grid-cols-2 gap-2">
              <div
                onClick={handleFacebookShare}
                className="flexCenter cursor-pointer rounded bg-[#2463EB] px-3 py-[6px] text-14xl text-white"
              >
                <p> Facebook</p>
              </div>
              <div
                onClick={handleWhatsAppShare}
                className="flexCenter cursor-pointer rounded bg-[#22C55D] px-3 py-[6px] text-14xl text-white"
              >
                <p> Whatsapp</p>
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
