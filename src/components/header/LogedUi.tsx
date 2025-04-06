import MobileNav from "./MobileNav";
import Notifications from "./Notifications";
import Messages from "./Messages";
import ProfileNav from "./ProfileNav";
import { JwtPayload } from "jsonwebtoken";
import { getUserMessages, getUserNotifications } from "@/actions/userActions";
import { MessageT, NotifT } from "@/libs/types";

export type LogedUiProps = {
  avatar: string;
  isLogged: string | JwtPayload | null;
};

export default async function LogedUi({ avatar, isLogged }: LogedUiProps) {
  const messages = (await getUserMessages()) as MessageT[];
  const notifications = (await getUserNotifications()) as NotifT[];

  return (
    <div className="flexCenter gap-2 text-[24px] text-main tablet:gap-4 tablet:text-darker">
      <Messages messages={messages} />
      <Notifications notifications={notifications} />
      <ProfileNav avatar={avatar} isLogged={isLogged} />
      <MobileNav user />
    </div>
  );
}
