import Image from "next/image";
import avatarPlaceholder from "../../../public/images/avatar.png";
import { MdMoreHoriz } from "react-icons/md";
import { useRouter } from "next/navigation";

type UserCardProps = {
  avatar: string;
  userName: string;
  category: string;
  userId: string;
  tokenId: string | undefined;
};

export default function UserCard({
  avatar,
  userName,
  category,
  userId,
  tokenId,
}: UserCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        tokenId !== userId
          ? router.push(`/profile/${userId}`)
          : router.push("/user");
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
