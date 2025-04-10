import Image from "next/image";
import placeholder from "../../../public/images/noActivity.png";

export default function NoActivity({
  message,
  user,
}: {
  message?: boolean;
  user?: boolean;
}) {
  return (
    <div className="flexCenter flex-col gap-5 pt-[100px]">
      <Image
        src={placeholder}
        alt="no activity"
        height={231}
        width={284}
        className="h-[174px] w-[213px] tablet:h-[231px] tablet:w-[284px]"
      />
      <p className="text-12lg text-neutralDarkHover tablet:text-14lg">
        {user && "No users have joined yet"}
        {message && "No messages found"}
        {!message && !user && "No activity has been posted yet"}
      </p>
    </div>
  );
}
