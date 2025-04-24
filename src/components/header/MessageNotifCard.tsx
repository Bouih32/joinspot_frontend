import Image from "next/image";
import { formatTime } from "@/libs/utils";
import { usePathname, useRouter } from "next/navigation";
import { markAsRead } from "@/actions/getActivities";
import { avatarPlaceholder } from "@/libs/constantes";

type MessageNotifCardProps = {
  content: string;
  date: string;
  userData: { avatar: string; userName: string };
  messageId: string;
  handleClose: (() => void) | undefined;
};

export default function MessageNotifCard({
  content,
  date,
  userData,
  messageId,
  handleClose,
}: MessageNotifCardProps) {
  const router = useRouter();
  const pathName = usePathname();
  const link = pathName.startsWith("/admin")
    ? `/admin/support/${messageId}`
    : `/user/messages/${messageId}`;
  const handleSeen = async () => {
    handleClose && handleClose();
    router.push(link);
    await markAsRead(messageId);
  };
  return (
    <div
      onClick={handleSeen}
      className="flexBetween cursor-pointer rounded-[2px] border-b border-neutralLightHover p-1 py-[2px] pb-1 font-openSans hover:bg-errorHover"
    >
      <div className="flexCenter gap-2">
        <div className="h-[25px] w-[25px] overflow-hidden rounded-full laptop:h-[31px] laptop:w-[31px]">
          <Image
            src={userData.avatar ?? avatarPlaceholder}
            alt="logo"
            width={31}
            height={31}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-[100px] tablet:w-[200px]">
          <h2 className="text-10xl text-mainHover laptop:text-12xl">
            {userData.userName}
          </h2>
          <p className="line-clamp-1 overflow-hidden text-ellipsis text-10sm text-neutralHover laptop:text-12sm">
            {content}
          </p>
        </div>
      </div>
      <span className="text-10sm text-neutral laptop:text-10lg">
        {formatTime(date)}
      </span>
    </div>
  );
}
