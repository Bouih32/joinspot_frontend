import { avatarPlaceholder } from "@/libs/constantes";
import Image from "next/image";

type UserCardProps = {
  title: string;
  category: string;
  avatar: string;
};

export default function UserCard({ title, category, avatar }: UserCardProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatar ?? avatarPlaceholder}
        alt="avatar"
        height={50}
        width={50}
        className="rounded-full object-contain"
      />
      <div className="">
        <h1 className="text-16lg text-main">{title}</h1>
        <span className="text-14sm text-neutralDark">{category}</span>
      </div>
    </div>
  );
}
