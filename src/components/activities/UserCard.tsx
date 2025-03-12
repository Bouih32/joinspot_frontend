import Image from "next/image";
import avatarPlaceholder from "../../../public/images/avatar.png";
import { MdMoreHoriz } from "react-icons/md";

type UserCardProps = {
  avatar: string;
  userName: string;
  category:string
};

export default function UserCard({ avatar, userName,category }: UserCardProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flexCenter gap-2">
        <Image
          src={avatar ? avatar : avatarPlaceholder}
          alt="avatar"
          height={38}
          width={38}
          className="h-[38px] w-[38px] rounded-full object-cover object-center"
        />
        <div className="">
          <h1 className="text-14xl text-darker">{userName}</h1>
          <span className="text-10xl text-neutralDark">{category}</span>
        </div>
      </div>
      <MdMoreHoriz className="cursor-pointer text-neutralDark" />
    </div>
  );
}
