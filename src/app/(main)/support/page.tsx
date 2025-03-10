import Container from "@/components/Container";
import Welcome from "@/components/sections/about/Welcome";
import Contact from "../../../components/sections/support/Contact";

export default function SupportPage() {
  return (
    <main>
      <Welcome
        title="We're Here to Help!"
        para="Find answers to your questions or get in touch with our support team."
      />
      <Container>
        <Contact />
      </Container>
    </main>
  );
}
