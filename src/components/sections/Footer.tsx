import Container from "../Container";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Nav from "../header/Nav";
import { footerLinks, navLinks } from "@/libs/constantes";

export default function footer() {
  return (
    <footer className="bg-footerBg pb-6 pt-10 tablet:pb-4 laptop:pt-[65px]">
      <Container classname="space-y-10 tablet:space-y-[54px]">
        <section className="tablet:flexBetween flex-col space-y-6 tablet:flex-row tablet:space-y-0">
          <div className="flexBetween self-start">
            <div className="space-y-[7px] tablet:space-y-3">
              <Image
                src={logo}
                alt="logo"
                className="h-[18px] w-[114.983px] object-contain tablet:h-[39px] tablet:w-[227px]"
              />
              <p className="text-10lg text-secondHover tablet:text-20lg laptop:text-26lg">
                Bringing People & Passions Together.
              </p>
            </div>

            <div className="flexCenter gap-[2px] tablet:hidden">
              <div className="h-6 w-6 rounded-full bg-main"></div>
              <div className="h-6 w-6 rounded-full bg-main"></div>
              <div className="h-6 w-6 rounded-full bg-main"></div>
            </div>
          </div>

          <div className="flex gap-20 xl:gap-[142px]">
            <Nav navInfo={navLinks.slice(0, 4)} footer />
            <Nav navInfo={footerLinks} footer />
          </div>

          <div className="hidden space-y-[17px] tablet:block">
            <div className="h-[45px] w-[45px] rounded-full bg-main"></div>
            <div className="h-[45px] w-[45px] rounded-full bg-main"></div>
            <div className="h-[45px] w-[45px] rounded-full bg-main"></div>
          </div>
        </section>
        <p className="text-center text-10lg text-secondDark tablet:text-12lg">
          JOINSPOT, ALL RIGHTS RESERVED
        </p>
      </Container>
    </footer>
  );
}
