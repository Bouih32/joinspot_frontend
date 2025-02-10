import Image from "next/image";
import empty from "../../../public/images/emptyNotification.png";
export default function EmptyMessage() {
  return (
    <div className="flexCenter flex-col pb-3 pt-[7px] text-center laptop:pb-[21px] laptop:pt-[14px]">
      <Image
        src={empty}
        alt="logo"
        className="h-[39px] w-[161px] object-contain"
      />
      <h2 className="pb-1 pt-[2px] text-12xl text-main tablet:pt-2 laptop:text-20xl">
        Start a Conversation
      </h2>
      <p className="w-[197px] text-10lg text-neutral laptop:w-[335px] laptop:text-14lg">
        You haven’t received any messages yet. Start by visiting a user’s
        profile or joining an activity to connect with others!
      </p>
    </div>
  );
}
