import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import InfoCard from "./InfoCard";
import { nanoid } from "nanoid";

export default function Socials() {
  const socials = [
    { icon: <BiSolidPhoneCall />, info: "+2127 07070707" },
    { icon: <MdEmail />, info: "support@joinspot.com" },
    {
      icon: <IoLocationSharp />,
      info: "Lorem ipsum dolor sit amet consectetur. Gravida euismod ",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center gap-10 rounded-[5px] bg-main py-[14px] text-center tablet:w-[338px] tablet:items-start tablet:gap-20 tablet:rounded-xl tablet:p-10 tablet:text-start laptop:w-[514px]">
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
    </section>
  );
}
