import Container from "@/components/Container";
import SubTitle from "../SubTitle";

export default function Welcome() {
  return (
    <section className="bg-linesLight bg-main bg-cover bg-center py-[34px] text-secondLight">
      <Container classname="tablet:space-y-4 space-y-3">
        <h1 className="title">Welcome to JoinSpot</h1>
        <SubTitle classname="text-secondLight">
          Where Experiences Come to Life!
        </SubTitle>
      </Container>
    </section>
  );
}
