import Link from "next/link";
import SubTitle from "../SubTitle";
import Title from "../Title";
import Button from "@/components/Button";

export default function OfferText() {
  return (
    <section className="flex flex-col items-center justify-between gap-3 text-center tablet:items-start tablet:text-start laptop:flex-row">
      <div className="space-y-3">
        <Title>Top offers</Title>
        <SubTitle classname="tablet:w-full">
          Discover the most exciting activities happening around you! Whether
          you're into adventure, wellness, or social meetups, there's something
          for everyone!
        </SubTitle>
      </div>
      <Link href="/activities" className="tablet:self-end laptop:self-center">
        <Button secondary>Show all offers</Button>
      </Link>
    </section>
  );
}
