import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function UserSocials({
  link,
  platform,
}: {
  link: string | undefined;
  platform: string | undefined;
}) {
  let icon;
  if (platform === "FACEBOOK") icon = <BsFacebook className="text-main" />;
  if (platform === "INSTAGRAM")
    icon = <RiInstagramFill className="text-main" />;
  if (platform === "WEBSITE") icon = <FaLink className="text-main" />;
  if (platform === "YOUTUBE") icon = <FaYoutube className="text-main" />;
  return (
    link && (
      <Link
        href={link}
        target="_blank"
        className="flex items-center gap-[6px] text-12lg text-neutralDarkActive tablet:text-14lg laptop:text-16lg"
      >
        {icon}

        <p className="lowercase first-letter:uppercase">{platform}</p>
      </Link>
    )
  );
}
