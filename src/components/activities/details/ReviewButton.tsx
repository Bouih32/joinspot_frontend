"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SelectStar from "./SelectStar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewValidation } from "@/libs/validation";
import { z } from "zod";
import TextArea from "@/components/TextArea";
import { cn } from "@/libs/utils";

type ReviewButtonProps = {
  role?: string | null;
};

export type ReviewT = z.infer<typeof reviewValidation>;
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

  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<ReviewT>({
    resolver: zodResolver(reviewValidation),
  });

  const addStars = (stars: number) => {
    setValue("stars", stars.toString());
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    console.log(formData);
    // setLoading(true);
    // await addActivity(formData);
    // setLoading(false);
    // handleSuccess();
    // router.push("/activities");
  };

  return (
    <div className="">
      <div onClick={() => setOpen(true)} className="flex tablet:justify-end">
        <Button secondary>Share Your Experience</Button>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[800] grid cursor-pointer place-content-center bg-white/50"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            onClick={(e) => e.stopPropagation()}
            className="flex w-[259px] flex-col gap-3 rounded-[8px] bg-white px-4 py-4 text-12lg text-second shadow-8xl tablet:w-[540px] tablet:gap-6 tablet:rounded-xl tablet:px-5 tablet:py-[30px] tablet:text-16lg"
          >
            <h3 className="text-16xxl text-main tablet:text-20xxl">
              Share your experience with [Activity Name]
            </h3>
            <div className="flexBetween">
              <p className={cn(errors.stars && "text-error")}>
                Rate this Activity
              </p>
              <SelectStar addStars={addStars} />
            </div>
            <div className="">
              <p>Your Review</p>
              <p className="font-normal text-darker">
                Tell us what you loved (or what could be improved)!
              </p>
            </div>
            <TextArea<ReviewT>
              placeholder=""
              register={register}
              name="comment"
              error={errors.comment?.message as string}
            />

            <div className="flexCenter gap-2 self-end">
              <Button secondary>Submit</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
