import Container from "@/components/Container";
import Title from "../Title";
import SubTitle from "../SubTitle";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { FaGraduationCap, FaStar } from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { nanoid } from "nanoid";

export default function Services() {
  const services = [
    {
      title: "Activity Hosting",
      sub: "Create and manage events effortlessly.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Seamless Booking",
      sub: "Join activities with just a few clicks.",
      icon: <BsBookmarkCheckFill className="text-[18px] tablet:text-[28px]" />,
    },
    {
      title: "Verified Organizers",
      sub: "Connect with trusted hosts around you.",
      icon: <FaStar />,
    },
    {
      title: "Community Engagement",
      sub: "Share experiences and discover new places.",
      icon: <IoPeople />,
    },
  ];
  return (
    <section className="bg-secondLight py-[48px] tablet:py-[70px]">
      <Container classname="flex flex-col tablet:flex-row laptop:flex-col tablet:gap-[70px] gap-[25px]">
        <section className="flex flex-col items-center gap-3 text-center tablet:items-start tablet:text-start laptop:flex-row laptop:items-center laptop:justify-between">
          <div className="space-y-3">
            <Title>Our Services</Title>
            <SubTitle>
              At <span className="font-bold">JoinSpot</span>, we make it easy to
              organize and join activities that match your interests. Whether
              you're looking for new experiences or planning an event, our
              platform offers:
            </SubTitle>
          </div>
          <Link href="/about" className="text-16xl text-main underline">
            Discover more
          </Link>
        </section>
        <section className="flexBetween flex-col items-start gap-3 self-start tablet:gap-5 laptop:flex-row laptop:self-stretch">
          {services.map((ele) => (
            <ServiceCard
              key={nanoid()}
              icon={ele.icon}
              sub={ele.sub}
              title={ele.title}
            />
          ))}
        </section>
      </Container>
    </section>
  );
}
