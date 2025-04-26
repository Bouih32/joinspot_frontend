import { avatarPlaceholder } from "@/libs/constantes";
import Image from "next/image";

type UserInfoProps = {
  avatar: string;
  userName: string;
  category: string;
  userId: string;
  tokenId: string | undefined;
  //   {
  //     avatar,
  //     userName,
  //     category,
  //     userId,
  //     tokenId,
  //   }: UserInfoProps
};
export default function UserInfo() {
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
        className="h-[38px] w-[38px] rounded-full object-cover object-center"
      />
      <div className="flex flex-col">
        <h1 className="text-14xl text-darker">Othmane Bouih</h1>
        <span className="text-10xl text-neutralDark">aglay</span>
      </div>
    </div>
  );
}
