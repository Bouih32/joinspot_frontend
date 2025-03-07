import Image from "next/image";
import avatar from "../../../public/images/avatar.png";
import { MdMoreHoriz } from "react-icons/md";

export default function UserCard() {
  return (
    <div className="flex items-start justify-between">
      <div className="flexCenter gap-2">
        <Image
          src={avatar}
          alt="avatar"
          height={38}
          width={38}
          className="object-contain"
        />
        <div className="">
          <h1 className="text-14xl text-darker">Skylar Torff</h1>
          <span className="text-10xl text-neutralDark">Cuisine</span>
        </div>
      </div>
      <MdMoreHoriz className="cursor-pointer text-neutralDark" />
    </div>
  );
}
