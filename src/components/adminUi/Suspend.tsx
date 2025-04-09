"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBan } from "react-icons/fa";

type SuspendProps = {};
export default function Suspend() {
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

  const handleSuspend = () => {
    setOpen(true);
  };

  return (
    <div className="">
      <div onClick={handleSuspend}>
        <Button
          classname="bg-errorHover px-1 tablet:p-[6px] text-error text-nowrap  flex-row-reverse"
          icon={<FaBan />}
        >
          Suspend account
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
              Suspend account
            </h3>
            <div className="space-y-3">
              <p>
                The user’s name account will be suspended after submitting this
                form. Are you sure ?
              </p>
            </div>

            <div className="flexCenter gap-2 self-end">
              <div
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Button secondary classname="text-error border-error">
                  Cancel
                </Button>
              </div>
              <div className="">
                <Button classname="bg-error">Suspend</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
