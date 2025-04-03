"use client";

import { useContext } from "react";
import { MdOutlineMail } from "react-icons/md";
import EmptyMessage from "./EmptyMessage";
import NotificationNumber from "./NotificationNumber";
import { cn } from "@/libs/utils";
import { NavContext } from "@/contexts/NavigationContext";
import { MessageT } from "@/libs/types";
import { nanoid } from "nanoid";
import MessageNotifCard from "./MessageNotifCard";

export default function Messages({ messages }: { messages: MessageT[] }) {
  const context = useContext(NavContext);
  if (!context) return;
  const { handleClose, handleOpen, open } = context;

  const data = messages.filter((ele) => ele.read === false);
  return (
    <div className="relative">
      <div className="relative z-[600]">
        <MdOutlineMail
          className={cn(
            "cursor-pointer hover:text-main",
            open === "messages" && "text-main",
          )}
          onClick={() => {
            handleOpen && handleOpen("messages");
          }}
        />

        {data.length > 0 ? (
          <NotificationNumber>{data.length}</NotificationNumber>
        ) : null}
      </div>

      {open === "messages" && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={handleClose}
          ></div>

          <section
            className="absolute right-0 top-[150%] z-[600] w-[242px] space-y-[14px] rounded bg-secondLight p-2 shadow-23xl laptop:w-[385px] laptop:p-[18px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flexBetween border-b border-neutral pb-2 text-10lg text-neutral laptop:text-12lg">
              <h2>Messages</h2>
              <p className="text-main">View Inbox</p>
            </div>
            <section className="space-y-2">
              {data.length > 0 ? (
                data.map((ele) => (
                  <MessageNotifCard
                    key={nanoid()}
                    content={ele.content}
                    userData={ele.message_from}
                    date={ele.createdAt}
                    messageId={ele.messageId}
                    handleClose={handleClose}
                  />
                ))
              ) : (
                <EmptyMessage message />
              )}
            </section>
          </section>
        </>
      )}
    </div>
  );
}
