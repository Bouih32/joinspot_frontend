import { SocialsT } from "@/libs/types";
import Link from "next/link";
import { CgAddR } from "react-icons/cg";
import { FaLocationDot, FaUserClock } from "react-icons/fa6";

type SocialsHeaderProps = {
  location: string;
  socials: SocialsT[];
};

export default function SocialsHeader({
  location,
  socials,
}: SocialsHeaderProps) {
  console.log(socials);
  return (
    <section className="flex flex-col-reverse justify-between gap-4 border-b border-neutralLightActive pb-2.5 text-12lg text-neutralDarkHover tablet:flex-row tablet:items-center tablet:pb-[15px] tablet:text-14lg laptop:text-16lg">
      {socials.length === 0 && (
        <Link
          href="/user/settings"
          className="flex items-center gap-[6px] font-normal text-main"
        >
          <CgAddR />
          <p>add your links</p>
        </Link>
      )}
      <div className="flexBetween gap-4">
        <div className="flexCenter gap-[6px]">
          <FaLocationDot className="text-main" />
          <p className="first-letter:uppercase">{location}, Morocco</p>
        </div>
        <div className="flexCenter gap-[6px]">
          <FaUserClock className="text-main" />
          <p>Member since 2025</p>
        </div>
      </div>
    </section>
  );
}
