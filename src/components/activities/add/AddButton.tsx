"use client";

import Button from "@/components/Button";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";

type AddButtonProps = {
  mobile?: boolean;
  role: string | null;
};
export default function AddButton({ mobile, role }: AddButtonProps) {
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
      <div
        className={cn(
          "hidden h-[30px] w-[30px] cursor-pointer place-content-center rounded-full border border-secondHover text-secondHover tablet:grid tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:text-white",
          mobile && "grid tablet:hidden",
        )}
        onClick={handleAdd}
      >
        <GoPlus className="text-[20px]" />
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[800] grid cursor-pointer place-content-center bg-white/50"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-[329px] w-[259px] flex-col justify-between rounded-[8px] bg-white px-4 py-4 text-14lg text-second shadow-8xl tablet:h-[336px] tablet:w-[540px] tablet:rounded-xl tablet:px-5 tablet:py-[30px] tablet:text-16lg"
          >
            <h3 className="text-16xxl text-main tablet:text-20xxl">
              Unlock More Possibilities!
            </h3>
            <div className="space-y-3">
              <p>
                You’re exploring amazing activities! But did you know? As a Pro
                User, you can:
              </p>
              <ul className="list-disc pl-6 font-normal text-neutralHover">
                <li>Post your own activities</li>
                <li>Save and manage your favorite posts</li>
                <li>Access exclusive features</li>
              </ul>
              <p>Upgrade now and take full control of your experience!</p>
            </div>

            <div className="flexCenter gap-2 self-end">
              <div
                onClick={(e) => {
                  setOpen(false);
                }}
              >
                <Button secondary>Cancel</Button>
              </div>
              <Button>Upgrade to pro</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
