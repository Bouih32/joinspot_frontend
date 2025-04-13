import Image from "next/image";

type EmptyProps = {
  message?: boolean;
};
export default function EmptyMessage({ message }: EmptyProps) {
  return (
    <div className="flexCenter flex-col pb-3 pt-[7px] text-center laptop:pb-[21px]">
      <Image
        src="https://i.postimg.cc/13wbXxty/empty-Notification.png"
        alt="logo"
        className="h-[39px] w-[161px] object-contain"
      />
      <h2 className="pb-1 pt-[2px] text-12xl text-main tablet:pt-2 laptop:text-20xl">
        {message ? "Start a Conversation" : "Stay Update"}
      </h2>
      <p className="w-[197px] text-10lg text-neutral laptop:w-[335px] laptop:text-14lg">
        {message
          ? "You haven’t received any messages yet. Start by visiting a user’s profile or joining an activity to connect with others!"
          : "You have no notifications right now. Keep an eye here for activity updates, new messages, and special event alerts!"}
      </p>
    </div>
  );
}
