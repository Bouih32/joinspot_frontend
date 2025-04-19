"use client";

import { banActivity, banUser, handleOrganizer } from "@/actions/getActivities";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSolidCheckCircle } from "react-icons/bi";

export default function AcceptRequest({
  id,
  degreeId,
}: {
  id: string;
  degreeId: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSuspend = async () => {
    setLoading(true);
    await handleOrganizer({ status: "VERIFIED", userId: id, degreeId });
    router.refresh();
    setLoading(false);
    setOpen(false);
  };

  return (
    <div className="">
      <div onClick={() => setOpen(true)}>
        <Button
          icon={<BiSolidCheckCircle />}
          classname="bg-successHover flex-row-reverse items-center tablet:items-center text-success tablet:px-2 tablet:py-1 px-2 py-1 "
        >
          Accept
        </Button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[800] grid cursor-pointer place-content-center bg-white/50"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-[259px] flex-col justify-between gap-4 rounded-[8px] bg-white px-4 py-4 text-14lg text-second shadow-8xl tablet:w-[540px] tablet:gap-6 tablet:rounded-xl tablet:px-5 tablet:py-[30px] tablet:text-16lg"
          >
            <h3 className="text-16xxl text-main tablet:text-20xxl">
              Accept Request
            </h3>
            <div className="space-y-3">
              <p>
                This request will be accepted and the user will become an
                ORGANIZER . Are you sure ?
              </p>
            </div>

            <div className="flexCenter gap-2 self-end">
              <div
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Button secondary classname="text-success border-success">
                  Cancel
                </Button>
              </div>
              <div onClick={handleSuspend}>
                <Button classname="bg-success" disabled={loading}>
                  Agree
                  {loading && (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
