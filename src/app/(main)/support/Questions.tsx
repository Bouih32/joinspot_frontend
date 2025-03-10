import React from "react";
import QuestionCard from "./QuestionCard";
import { questions } from "@/libs/constantes";
import { nanoid } from "nanoid";

export default function Questions() {
  return (
    <section className="flexCenter flex-col gap-5 pb-20 tablet:gap-[35px] tablet:pb-[100px]">
      <h2 className="title self-start text-main">Frequently Asked Questions</h2>
      <div className="space-y-2 tablet:space-y-5">
        {questions.map((ele) => (
          <QuestionCard key={nanoid()} para={ele.para} title={ele.title} />
        ))}
      </div>
    </section>
  );
}
