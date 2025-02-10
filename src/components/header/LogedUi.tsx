import Image from "next/image";
import avatar from "../../../public/images/avatar.png";
import { MdOutlineNotificationsNone, MdOutlineMail } from "react-icons/md";
import MobileNav from "./MobileNav";
import Notifications from "./Notifications";

export default function LogedUi() {
  return (
    <div className="flexCenter gap-2 text-[24px] text-main tablet:gap-4 tablet:text-darker">
      <MdOutlineMail className="cursor-pointer" />
      <Notifications />
      <Image
        src={avatar}
        alt="logo"
        className="h-[25px] w-[25px] cursor-pointer rounded-full object-contain tablet:h-[45px] tablet:w-[45px]"
      />
      <MobileNav user />
    </div>
  );
}
