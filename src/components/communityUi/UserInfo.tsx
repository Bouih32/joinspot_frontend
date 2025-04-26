import { avatarPlaceholder } from "@/libs/constantes";
import { cn } from "@/libs/utils";
import Image from "next/image";

type UserInfoProps = {
  avatar: string;
  userName: string;
  category: string;
  userId: string;
  tokenId: string | undefined;
  comment?: boolean;
  //   {
  //     avatar,
  //     userName,
  //     category,
  //     userId,
  //     tokenId,
  //   }: UserInfoProps
};
export default function UserInfo({ comment }: { comment?: boolean }) {
  return (
    <div
      //   href={tokenId !== userId ? `/profile/${userId}` : "/user"}
      className="flex items-center gap-2"
    >
      <Image
        src={avatarPlaceholder}
        alt="avatar"
        height={38}
        width={38}
        className={cn(
          "h-[38px] w-[38px] rounded-full object-cover object-center",
          comment && "h-[32px] w-[32px]",
        )}
      />
      <div className="flex flex-col">
        <h1 className={cn("text-14xl text-darker", comment && "text-12xl")}>
          Othmane Bouih
        </h1>
        <span
          className={cn("text-10xl text-neutralDark", comment && "text-10sm")}
        >
          aglay
        </span>
      </div>
    </div>
  );
}
