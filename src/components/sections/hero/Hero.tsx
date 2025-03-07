import ActivityCard from "@/components/activities.tsx/ActivityCard";
import Container from "../../Container";
import HeroFilter from "./HeroFilter";
import { FaCircle } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-heroBg bg-fit overflow-hidden bg-top bg-no-repeat py-[34px] tablet:h-[570px] tablet:bg-left">
      <Container classname="tablet:pt-[70px] pt-[34px] pb-0">
        <section className="flex w-full flex-col items-start space-y-[25px] justify-self-end tablet:w-fit tablet:items-center">
          <HeroFilter />
          <div className="flex flex-nowrap gap-2.5 overflow-hidden tablet:flex-col tablet:gap-5">
            <ActivityCard />
            <ActivityCard />
          </div>
          <div className="flexCenter mx-auto gap-[2px] tablet:hidden">
            <FaCircle className="text-[12px] text-main" />
            <FaCircle className="text-[10px] text-white" />
            <FaCircle className="text-[10px] text-white" />
            <FaCircle className="text-[10px] text-white" />
          </div>
        </section>
      </Container>
    </section>
  );
}
