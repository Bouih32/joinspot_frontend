import MobileNav from "./MobileNav";
import Notifications from "./Notifications";
import Messages from "./Messages";
import ProfileNav from "./ProfileNav";

export default function LogedUi({ avatar }: { avatar: string }) {
  return (
    <div className="flexCenter gap-2 text-[24px] text-main tablet:gap-4 tablet:text-darker">
      <Messages />
      <Notifications />
      <ProfileNav avatar={avatar} />
      <MobileNav user />
    </div>
  );
}
