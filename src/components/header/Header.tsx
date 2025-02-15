import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Nav from "./Nav";
import Button from "../Button";
import Container from "../Container";
import Link from "next/link";
import MobileNav from "./MobileNav";
import LogedUi from "./LogedUi";
import { navLinks } from "@/libs/constantes";

type HeaderProps = {
  user?: boolean;
};

export default function Header({ user }: HeaderProps) {
  return (
    <section className="bg-white">
      <Container>
        <header className="flexBetween py-[15px] font-openSans text-darker tablet:py-[17px]">
          <Image
            src={logo}
            alt="logo"
            className="h-[21.986px] w-[124px] object-contain tablet:h-[32.979px] tablet:w-[217px] laptop:h-[38.5px] laptop:w-[227px]"
          />
          <Nav classname="hidden tablet:block" navInfo={navLinks} />
          {user ? (
            <LogedUi />
          ) : (
            <div className="tablet:flexCenter hidden gap-[5px] tablet:gap-2.5">
              <Link href="/signup">
                <Button variant>Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </div>
          )}

          {!user && <MobileNav user />}
        </header>
      </Container>
    </section>
  );
}
