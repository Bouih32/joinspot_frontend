import Container from "@/components/Container";
import Welcome from "@/components/sections/about/Welcome";
import Contact from "../../../components/sections/support/Contact";
import Questions from "./Questions";

export default function SupportPage() {
  return (
    <main>
      <Welcome
        title="We're Here to Help!"
        para="Find answers to your questions or get in touch with our support team."
      />
      <Container classname="laptop:space-y-20 space-y-10">
        <Contact />
        <Questions />
      </Container>
    </main>
  );
}
