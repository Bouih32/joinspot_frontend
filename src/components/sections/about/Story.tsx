import Image from "next/image";
import SubTitle from "../SubTitle";
import MobileStory from "./MobileStory";
import Container from "@/components/Container";

export default function Story() {
  return (
    <>
      <MobileStory />

      <section className="hidden w-full justify-between overflow-hidden bg-lines bg-cover bg-center bg-no-repeat tablet:relative tablet:flex">
        <Container>
          <section className="flex flex-col space-y-40 pt-[50px]">
            <div className="space-y-4 laptop:space-y-5">
              <h1 className="title text-main">Our Story</h1>
              <SubTitle classname="text-darker laptop:w-[648px] w-[421px]">
                JoinSpot was born out of a simple idea:&nbsp;
                <span className="font-bold">
                  to make it easy for people to connect through activities they
                  love.
                </span>
                Founded by a team of passionate explorers and community
                builders, we noticed that while there are countless activities
                happening around us, finding them—or organizing them—can be a
                challenge. That's why we created JoinSpot: a platform that
                brings people together through surfing lessons, cooking
                workshops, city tours, and so much more.
              </SubTitle>
            </div>
            <div className="space-y-4 laptop:space-y-5">
              <h1 className="title text-main">Our Mission</h1>
              <SubTitle classname="text-darker laptop:w-[648px] w-[421px]">
                Our mission is to&nbsp;
                <span className="font-bold">
                  empower people to create, share, and enjoy meaningful
                  experiences.
                </span>
                We want to make it effortless for anyone to organize an
                activity, whether it's a paid workshop led by a professional or
                a free community event. At the same time, we aim to help
                participants discover unique, local, and exciting things to
                do—wherever they are.
              </SubTitle>
            </div>
          </section>
        </Container>
        <Image
          src="https://i.postimg.cc/65gNTLff/story.png"
          alt="people running"
          width={608}
          height={768}
          className="absolute right-0 top-0 h-full w-[425px] object-cover xl:w-[608px]"
        />
      </section>
    </>
  );
}
