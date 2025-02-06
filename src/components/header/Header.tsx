import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Nav from "../Nav";
import Button from "../Button";
import Container from "../Container";

export default function Header() {
  return (
    <Container>
      <header className="flexBetween font-openSans text-darker">
        <Image src={logo} alt="logo" />
        <Nav />
        <div className="flexCenter gap-[5px] md:gap-2.5">
          <Button variant>Sign Up</Button>
          <Button>Login</Button>
        </div>
      </header>
    </Container>
  );
}
