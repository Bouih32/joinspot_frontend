import Container from "@/components/Container";
import Title from "../Title";
import SubTitle from "../SubTitle";
import Link from "next/link";

export default function Services() {
  return (
    <section className="py-[48px] tablet:py-[70px]">
      <Container>
        <section className="">
          <div className="">
            <Title>Our Services</Title>
            <SubTitle>
              At <span className="font-bold">JoinSpot</span>, we make it easy to
              organize and join activities that match your interests. Whether
              you're looking for new experiences or planning an event, our
              platform offers:
            </SubTitle>
          </div>
          <Link href="#" className="text-16xl text-main underline">
            Discover more
          </Link>
        </section>
      </Container>
    </section>
  );
}
