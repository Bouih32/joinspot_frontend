import Image from "next/image";
import avatar from "../../../../public/images/avatar.png";

type UserCardProps = {
  title: string;
  category: string;
};

export default function UserCard({ title, category }: UserCardProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatar}
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
