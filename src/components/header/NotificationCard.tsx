import Image from "next/image";
import { cn, formatTime } from "@/libs/utils";
import { NotifT } from "@/libs/types";
import { avatarPlaceholder } from "@/libs/constantes";

export default function NotificationCard({ data }: { data: NotifT }) {
  return (
    <div
      className={cn(
        "flexBetween cursor-pointer rounded-[2px] border-b border-neutralLightHover p-2 py-[2px] pb-1 font-openSans",
        !data.seen && "bg-errorHover",
      )}
    >
      <div className="flexCenter gap-2">
        <div className="h-[25px] w-[25px] overflow-hidden rounded-full laptop:h-[31px] laptop:w-[31px]">
          <Image
            src={data.notification_from.avatar ?? avatarPlaceholder}
            alt="logo"
            width={31}
            height={31}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-[100px] tablet:w-[200px]">
          <h2 className="text-10xl text-mainHover laptop:text-12xl">
            {data.notification_from.userName}
          </h2>
          <p className="line-clamp-1 overflow-hidden text-ellipsis text-10sm text-neutralHover laptop:text-12sm">
            {data.content}
          </p>
        </div>
      </div>
      <span className="text-10sm text-neutral laptop:text-10lg">
        {formatTime(data.createdAt)}
      </span>
    </div>
  );
}
