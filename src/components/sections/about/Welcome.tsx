import Container from "@/components/Container";
import SubTitle from "../SubTitle";

type WelcomeProps = {
  title: string;
  para: string;
};

export default function Welcome({ title, para }: WelcomeProps) {
  return (
    <section className="bg-main bg-linesLight bg-cover bg-center py-[34px] text-secondLight">
      <Container classname="tablet:space-y-4 space-y-3">
        <h1 className="title">{title}</h1>
        <SubTitle classname="text-secondLight">{para}</SubTitle>
      </Container>
    </section>
  );
}
