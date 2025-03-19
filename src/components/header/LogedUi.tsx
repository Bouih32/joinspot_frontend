import MobileNav from "./MobileNav";
import Notifications from "./Notifications";
import Messages from "./Messages";
import ProfileNav from "./ProfileNav";
import { JwtPayload } from "jsonwebtoken";

export type LogedUiProps = {
  avatar: string;
  isLogged: string | JwtPayload | null;
};

export default function LogedUi({ avatar, isLogged }: LogedUiProps) {
  return (
    <div className="flexCenter gap-2 text-[24px] text-main tablet:gap-4 tablet:text-darker">
      <Messages />
      <Notifications />
      <ProfileNav avatar={avatar} isLogged={isLogged} />
      <MobileNav user />
    </div>
  );
}
