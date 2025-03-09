import Container from "@/components/Container";
import SubTitle from "../SubTitle";

export default function MobileStory() {
  return (
    <section className="bg-story flex h-[731px] bg-cover bg-center bg-no-repeat tablet:hidden">
      <section className="space-y-10 self-end bg-[#F8F6F4]/75 px-4 py-[27px]">
        <div className="space-y-2.5 laptop:space-y-5">
          <h1 className="title text-main">Our Story</h1>
          <SubTitle classname="text-darker  ">
            JoinSpot was born out of a simple idea: 
            <span className="font-bold">
              to make it easy for people to connect through activities they
              love.
            </span>
            Founded by a team of passionate explorers and community builders, we
            noticed that while there are countless activities happening around
            us, finding them—or organizing them—can be a challenge. That's why
            we created JoinSpot: a platform that brings people together through
            surfing lessons, cooking workshops, city tours, and so much more.
          </SubTitle>
        </div>
        <div className="space-y-2.5 laptop:space-y-5">
          <h1 className="title text-main">Our Mission</h1>
          <SubTitle classname="text-darker  ">
            Our mission is to 
            <span className="font-bold">
              empower people to create, share, and enjoy meaningful experiences.
            </span>
            We want to make it effortless for anyone to organize an activity,
            whether it's a paid workshop led by a professional or a free
            community event. At the same time, we aim to help participants
            discover unique, local, and exciting things to do—wherever they are.
          </SubTitle>
        </div>
      </section>
    </section>
  );
}
