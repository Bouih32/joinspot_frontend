"use client";

import { avatarPlaceholder } from "@/libs/constantes";
import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

type UserInfoProps = {
  token: string | undefined;
  user: {
    userName: string;
    avatar: string;
    userId: string;
  };
  comment?: boolean;
  category?: string;
  postTime?: string;
};

export default function UserInfo({
  comment,
  user,
  token,
  category,
  postTime,
}: UserInfoProps) {
  return (
    <Link
      href={token !== user.userId ? `/profile/${user.userId}` : "/user"}
      className="flex items-center gap-2"
    >
      <Image
        src={user.avatar ?? avatarPlaceholder}
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
          {user.userName}
        </h1>
        <span
          className={cn("text-10xl text-neutralDark", comment && "text-10sm")}
        >
          {comment ? postTime : category}
        </span>
      </div>
    </Link>
  );
}
