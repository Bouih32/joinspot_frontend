import Image from "next/image";
import avatar from "../../../public/images/avatar.png";
import MobileNav from "./MobileNav";
import Notifications from "./Notifications";
import Messages from "./Messages";
import ProfileNav from "./ProfileNav";

export default function LogedUi() {
  return (
    <div className="flexCenter gap-2 text-[24px] text-main tablet:gap-4 tablet:text-darker">
      <Messages />
      <Notifications />
      <ProfileNav />
      <MobileNav user />
    </div>
  );
}
