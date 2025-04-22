import Image from "next/image";
import { avatarPlaceholder } from "@/libs/constantes";
import ShareActivity from "./ShareActivity";
import Link from "next/link";

type UserCardProps = {
  avatar: string;
  userName: string;
  category: string;
  userId: string;
  tokenId: string | undefined;
  activityId: string;
};

export default function UserCard({
  avatar,
  userName,
  category,
  userId,
  tokenId,
  activityId,
}: UserCardProps) {
  return (
    <div
      className="flex items-start justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <Link
        href={tokenId !== userId ? `/profile/${userId}` : "/user"}
        className="flexCenter gap-2"
      >
        <Image
          src={avatar ? avatar : avatarPlaceholder}
          alt="avatar"
          height={38}
          width={38}
          className="h-[38px] w-[38px] rounded-full object-cover object-center"
        />
        <div className="flex flex-col">
          <h1 className="text-14xl text-darker">{userName}</h1>
          <span className="text-10xl text-neutralDark">{category}</span>
        </div>
      </Link>
      <ShareActivity activityId={activityId} />
    </div>
  );
}
