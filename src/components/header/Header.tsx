import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Nav from "./Nav";
import Button from "../Button";
import Container from "../Container";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
  return (
    <section className="bg-mainLight">
      <Container>
        <header className="flexBetween py-[15px] font-openSans text-darker tablet:py-[17px]">
          <Image
            src={logo}
            alt="logo"
            className="h-[18px] w-[106px] object-contain tablet:h-[29.98px] tablet:w-[174.5px] laptop:h-[39px] laptop:w-[227px]"
          />
          <Nav />
          <div className="tablet:flexCenter hidden gap-[5px] tablet:gap-2.5">
            <Link href="/signup">
              <Button variant>Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>
          <HiMenuAlt3 className="text-[22px] text-main tablet:hidden" />
        </header>
      </Container>
    </section>
  );
}
