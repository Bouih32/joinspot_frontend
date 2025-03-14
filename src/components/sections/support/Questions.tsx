import React from "react";
import QuestionCard from "./QuestionCard";
import { questions } from "@/libs/constantes";
import { nanoid } from "nanoid";
import { cn } from "@/libs/utils";

export default function Questions({ activities }: { activities?: boolean }) {
  return (
    <section
      className={cn(
        "flex w-full flex-col gap-5 pb-20 tablet:gap-[35px] tablet:pb-[100px]",
        !activities && "items-center",
      )}
    >
      <h2 className="title self-start text-main">Frequently Asked Questions</h2>
      <div className="space-y-2 tablet:space-y-5">
        {questions.map((ele) => (
          <QuestionCard
            key={nanoid()}
            para={ele.para}
            title={ele.title}
            activities={activities}
          />
        ))}
      </div>
    </section>
  );
}
