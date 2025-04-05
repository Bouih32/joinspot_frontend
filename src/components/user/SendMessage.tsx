"use client";

import { sendMessage } from "@/actions/getActivities";
import Button from "@/components/Button";
import { messageValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { z } from "zod";
import TextArea from "../TextArea";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type messageT = z.infer<typeof messageValidation>;

export default function SendMessage() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
  } = useForm<messageT>({
    resolver: zodResolver(messageValidation),
  });

  const handleSend = async () => {
    const res = await trigger();
    if (!res) return;
    setLoading(true);
    const content = getValues("content");
    const data = { content, toId: "snjsdd" };
    await sendMessage(data);
    setLoading(false);
  };

  return (
    <div className="">
      <div onClick={() => setOpen(true)}>
        <Button
          classname="hidden tablet:flex flex-row-reverse"
          icon={<HiOutlineMail className="text-[20px]" />}
        >
          Message
        </Button>
        <Button
          classname="p-2 tablet:p-2 tablet:hidden"
          icon={<HiOutlineMail />}
        />
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[800] grid cursor-pointer place-content-center bg-white/50"
          onClick={() => setOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                handleSend();
              }}
              className="flex w-[259px] flex-col justify-between gap-3 rounded-[8px] bg-white px-4 py-4 text-14lg text-second shadow-8xl tablet:w-[540px] tablet:gap-[28px] tablet:rounded-xl tablet:px-5 tablet:py-[30px] tablet:text-16lg"
            >
              <h3 className="text-16xxl text-main tablet:text-20xxl">
                Message
              </h3>
              <div className="space-y-3">
                <p>Send message to User’s name</p>
                <TextArea<messageT>
                  placeholder="Your message"
                  register={register}
                  name="content"
                  error={errors.content?.message as string}
                />
              </div>

              <div className="flexCenter gap-2 self-end">
                <div
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Button secondary>
                    Cancel
                    {loading && (
                      <AiOutlineLoading3Quarters className="animate-spin" />
                    )}
                  </Button>
                </div>
                <Button>Send</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
