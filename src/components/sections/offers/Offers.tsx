import Container from "@/components/Container";
import SubTitle from "../SubTitle";
import Title from "../Title";
import Link from "next/link";
import Button from "@/components/Button";
import ProgressBar from "./ProgressBar";
import ActivityCard from "@/components/activities/ActivityCard";
import { FaCircle } from "react-icons/fa";

export default function Offers() {
  return (
    <section className="py-[48px] tablet:py-[70px]">
      <Container>
        <section className="flex flex-col items-center justify-between gap-3 text-center tablet:items-start tablet:text-start laptop:flex-row">
          <div className="space-y-3">
            <Title>Top offers</Title>
            <SubTitle classname="tablet:w-full">
              Discover the most exciting activities happening around you!
              Whether you're into adventure, wellness, or social meetups,
              there's something for everyone!
            </SubTitle>
          </div>
          <Link href="#" className="tablet:self-end laptop:self-center">
            <Button secondary>Show all offers</Button>
          </Link>
        </section>
        <ProgressBar />
      </Container>
      <section className="space-y-[22px]">
        <section className="ml-4 mt-[48px] flex items-start gap-5 overflow-hidden tablet:mt-6 laptop:mt-[57px] xl:ml-20">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </section>
        <div className="flexCenter mx-auto gap-[2px] tablet:hidden">
          <FaCircle className="text-[12px] text-main" />
          <FaCircle className="text-[10px] text-neutralLightActive" />
          <FaCircle className="text-[10px] text-neutralLightActive" />
          <FaCircle className="text-[10px] text-neutralLightActive" />
        </div>
      </section>
    </section>
  );
}
