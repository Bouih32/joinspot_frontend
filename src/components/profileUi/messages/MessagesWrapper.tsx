import React from "react";
import NoActivity from "../NoActivity";
import MessageCard from "./MessageCard";
import { nanoid } from "nanoid";
import { getUserMessages } from "@/actions/userActions";
import { MessageT } from "@/libs/types";

export default async function MessagesWrapper() {
  const messages = (await getUserMessages()) as MessageT[];
  return messages.filter((ele) => ele.deletedAt === null).length !== 0 ? (
    <section className="w-full space-y-3 tablet:space-y-[19px]">
      {messages
        .filter((ele) => ele.deletedAt === null)
        .map((ele) => (
          <MessageCard key={nanoid()} data={ele} />
        ))}
    </section>
  ) : (
    <NoActivity message />
  );
}
