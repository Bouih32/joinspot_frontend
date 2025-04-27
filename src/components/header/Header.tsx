import Image from "next/image";
import Nav from "./Nav";
import Button from "../Button";
import Container from "../Container";
import Link from "next/link";
import LogedUi from "./LogedUi";
import NoUserNav from "./NoUserNav";
import { logo, navLinks } from "@/libs/constantes";
import { getHeaderData } from "@/actions/getUserData";
import { getToken } from "@/actions/decodeToken";
import NavigationContext from "@/contexts/NavigationContext";

export default async function Header() {
  const isLogged = await getToken();
  const userImg = await getHeaderData();

  return (
    <section className="sticky top-0 z-[600] bg-white">
      <NavigationContext>
        <Container>
          <header className="flexBetween py-[8.5px] font-openSans text-darker tablet:py-3">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                height={38}
                width={227}
                className="h-[21.986px] w-[124px] object-contain tablet:h-[32.979px] tablet:w-[217px] laptop:h-[38.5px] laptop:w-[227px]"
              />
            </Link>
            <Nav classname="hidden tablet:block" navInfo={navLinks} />
            {isLogged ? (
              <LogedUi avatar={userImg.avatar} isLogged={isLogged} />
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

            {!isLogged && <NoUserNav />}
          </header>
        </Container>
      </NavigationContext>
    </section>
  );
}
