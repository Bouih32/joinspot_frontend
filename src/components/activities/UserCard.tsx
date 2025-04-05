import Image from "next/image";
import avatarPlaceholder from "../../../public/images/avatar.png";
import { MdMoreHoriz } from "react-icons/md";
import { useRouter } from "next/navigation";

type UserCardProps = {
  avatar: string;
  userName: string;
  category: string;
  userId: string;
};

export default function UserCard({
  avatar,
  userName,
  category,
  userId,
}: UserCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/profile/${userId}`);
      }}
      className="flex items-start justify-between"
    >
      <div className="flexCenter gap-2">
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
      </div>
      <MdMoreHoriz className="cursor-pointer text-neutralDark" />
    </div>
  );
}
