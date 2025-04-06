import { SocialsT } from "@/libs/types";
import Link from "next/link";
import { CgAddR } from "react-icons/cg";
import { FaLocationDot, FaUserClock } from "react-icons/fa6";
import { cn } from "@/libs/utils";
import UserSocials from "../user/UserSocials";
import { nanoid } from "nanoid";

type SocialsHeaderProps = {
  location: string;
  socials: Partial<SocialsT>[];
  profile?: boolean;
};

export default function SocialsHeader({
  location,
  socials,
  profile,
}: SocialsHeaderProps) {
  return (
    <section
      className={cn(
        "flex flex-col-reverse justify-between gap-4 border-b border-neutralLightActive pb-2.5 text-12lg text-neutralDarkHover tablet:flex-row tablet:items-center tablet:pb-[15px] tablet:text-14lg laptop:text-16lg",
        socials.length === 0 && !profile && "flex-col-reverse",
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center justify-between gap-3 tablet:flex-row tablet:justify-start",
        )}
      >
        {socials.length !== 0 &&
          socials
            .slice(0, 2)
            .map((ele) => (
              <UserSocials
                key={nanoid()}
                link={ele.link}
                platform={ele.platform}
              />
            ))}
        {/* <UserSocials />
        <UserSocials /> */}
        {socials.length === 0 &&
          (!profile ? (
            <Link
              href="/user/settings"
              className="flex items-center gap-[6px] self-start font-normal text-main"
            >
              <CgAddR />
              <p>add your links</p>
            </Link>
          ) : (
            <p className="self-start text-neutralDark">
              No social links available
            </p>
          ))}
      </div>
      <div
        className={cn(
          "flex flex-col items-start justify-between gap-4 tablet:flex-row",
          socials.length === 0 && "flex-row",
        )}
      >
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
