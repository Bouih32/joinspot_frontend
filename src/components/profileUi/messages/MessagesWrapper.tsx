import React from "react";
import NoActivity from "../NoActivity";
import MessageCard from "./MessageCard";
import { nanoid } from "nanoid";
import { getUserMessages } from "@/actions/userActions";
import { MessageT } from "@/libs/types";
import Pagination from "@/components/Pagination";

export default async function MessagesWrapper({
  params,
}: {
  params: {
    search: string;
    page: string;
  };
}) {
  const data = await getUserMessages(params);

  return data.messages.filter((ele: MessageT) => ele.deletedAt === null)
    .length !== 0 ? (
    <section className="flex h-full flex-col justify-between gap-5 pb-5">
      <section className="w-full space-y-3 tablet:space-y-[19px]">
        {data.messages
          .filter((ele: MessageT) => ele.deletedAt === null)
          .map((ele: MessageT) => (
            <MessageCard key={nanoid()} data={ele} />
          ))}
      </section>
      <Pagination
        pages={data.pages}
        page={params.page ? parseInt(params.page) : 1}
      />
    </section>
  ) : (
    <NoActivity message />
  );
}
