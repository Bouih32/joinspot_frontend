import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationSharp, IoLogoInstagram } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import InfoCard from "./InfoCard";
import { nanoid } from "nanoid";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Socials() {
  const socials = [
    { icon: <BiSolidPhoneCall />, info: "+2127 07070707" },
    { icon: <MdEmail />, info: "support@joinspot.com" },
    {
      icon: <IoLocationSharp />,
      info: "Lorem ipsum dolor sit amet consectetur. Gravida euismod ",
    },
  ];

  const links = [
    { icon: <FaTwitter />, src: "#" },
    { icon: <IoLogoInstagram />, src: "#" },
    {
      icon: <FaFacebookF />,
      src: "#",
    },
  ];

  return (
    <section className="relative flex w-full flex-col items-center gap-10 overflow-hidden rounded-[5px] bg-main bg-linesLight bg-bottom py-[14px] text-center tablet:w-[338px] tablet:items-start tablet:gap-20 tablet:rounded-xl tablet:p-10 tablet:text-start laptop:w-[514px]">
      <div className="tablet:space-y-[6px]">
        <h2 className="text-20xxl tablet:text-28xxl">Get in touch</h2>
        <p className="text-10lg tablet:text-16lg">
          Any question or remarks? Just write <br className="tablet:hidden" />
          us a <br className="hidden tablet:block" /> message!
        </p>
      </div>

      <section className="space-y-[15px] tablet:space-y-[50px]">
        {socials.map((ele) => (
          <InfoCard key={nanoid()} icon={ele.icon} info={ele.info} />
        ))}
      </section>

      <div className="flexCenter gap-6">
        {links.map((ele) => (
          <Link
            key={nanoid()}
            href={ele.src}
            className="grid h-[30px] w-[30px] place-content-center rounded-full bg-white text-main outline-none"
          >
            {ele.icon}
          </Link>
        ))}
      </div>
      <Image
        src="https://i.postimg.cc/TYZZT2Tk/circle.png"
        height={250}
        width={250}
        alt="decore"
        className="absolute -bottom-[20px] -right-[20px] w-[100px] object-contain tablet:-bottom-[70px] tablet:-right-[70px] tablet:w-[250px]"
      />
    </section>
  );
}
