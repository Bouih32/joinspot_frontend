import Container from "@/components/Container";
import UniqueCard from "./UniqueCard";
import { unique } from "@/libs/constantes";
import { nanoid } from "nanoid";

export default function Unique() {
  return (
    <section className="bg-lines bg-cover bg-center bg-no-repeat py-[32px] tablet:py-[52px]">
      <Container classname="tablet:space-y-[35px] space-y-4  ">
        <h3 className="title text-main">Who is JoinSpot For ?</h3>
        <section className="flex flex-col flex-wrap justify-start gap-2.5 tablet:flex-row tablet:gap-3 laptop:gap-[30px]">
          {unique.map((ele) => (
            <UniqueCard key={nanoid()} para={ele.para} title={ele.title} />
          ))}
        </section>
      </Container>
    </section>
  );
}
