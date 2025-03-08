import SubTitle from "../SubTitle";
import Title from "../Title";
import ReviewCard from "./ReviewCard";

export default function Community() {
  return (
    <section className="flex flex-col gap-[30px] overflow-hidden bg-secondLight py-[48px] pl-4 tablet:flex-row tablet:gap-[63px] tablet:py-[70px] laptop:gap-[106px] xl:pl-20">
      <section className="space-y-3 text-center tablet:w-[356px] tablet:space-y-[32px] tablet:text-start">
        <Title>
          What Our <br className="hidden tablet:block" /> Community Says
        </Title>
        <SubTitle classname="tablet:w-[356px]">
          You're welcome! Here’s a clean and engaging <br /> Review Section for
          <span className="font-bold"> JoinSpot.</span>
        </SubTitle>
      </section>
      <section className="flex gap-5">
        <ReviewCard big />
        <ReviewCard />
        <ReviewCard />
      </section>
    </section>
  );
}
