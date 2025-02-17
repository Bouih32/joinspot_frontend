import Container from "../Container";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Nav from "../header/Nav";
import { footerLinks, navLinks } from "@/libs/constantes";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { nanoid } from "nanoid";

export default function footer() {
  const socials = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
  ];
  return (
    <footer className="bg-footerBg bg-[length:50%_100%] bg-left bg-no-repeat py-[35px] pt-4 tablet:bg-[length:40%_100%] tablet:py-[35px]">
      <Container classname="space-y-[30px]">
        <section className="tablet:flexBetween flex-col space-y-6 tablet:flex-row tablet:space-y-0">
          <div className="flexBetween self-start">
            <div className="space-y-[7px] tablet:space-y-3">
              <Image
                src={logo}
                alt="logo"
                className="h-[18px] w-[106px] object-contain tablet:h-[31.685px] tablet:w-[185px]"
              />
              <p className="text-10lg text-secondHover tablet:text-20lg">
                Bringing People & Passions Together.
              </p>
            </div>

            <div className="flexCenter gap-[2px] tablet:hidden">
              {socials.map((ele) => (
                <Link
                  key={nanoid()}
                  href={ele.link}
                  className="gridCenter h-6 w-6 rounded-full bg-main text-white"
                >
                  {ele.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-20 xl:gap-[142px]">
            <Nav navInfo={navLinks.slice(0, 4)} footer />
            <Nav navInfo={footerLinks} footer />
          </div>

          <div className="hidden space-y-[17px] tablet:block">
            {socials.map((ele) => (
              <Link
                key={nanoid()}
                href={ele.link}
                className="gridCenter h-[45px] w-[45px] rounded-full bg-main text-white"
              >
                {ele.icon}
              </Link>
            ))}
          </div>
        </section>
        <p className="text-center text-[8px] font-medium text-secondDark tablet:text-10lg">
          JOINSPOT, ALL RIGHTS RESERVED
        </p>
      </Container>
    </footer>
  );
}
