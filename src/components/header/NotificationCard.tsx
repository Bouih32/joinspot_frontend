import Image from "next/image";
import avatar from "../../../public/images/avatar2.png";

export default function NotificationCard() {
  return (
    <div className="flexBetween border-b border-neutralLightHover pb-[2px] font-openSans">
      <div className="flexCenter gap-2">
        <Image
          src={avatar}
          alt="logo"
          className="h-[25px] w-[25px] rounded-full object-contain laptop:h-[31px] laptop:w-[31px]"
        />
        <div className="">
          <h2 className="text-10xl text-mainHover laptop:text-12xl">
            Miracle Press
          </h2>
          <p className="text-10sm text-neutralHover laptop:text-12sm">
            Just following you
          </p>
        </div>
      </div>
      <span className="text-10sm text-neutral laptop:text-10lg">09:30AM</span>
    </div>
  );
}
