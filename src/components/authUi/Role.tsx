import { LiaUser } from "react-icons/lia";

export default function Role() {
  return (
    <div className="relative h-[59px] w-[156px] rounded-[60px] bg-mainLightActive pt-4 text-center font-openSans tablet:h-[107px] tablet:w-[200px] tablet:pt-10">
      <div className="gridCenter absolute left-[50%] top-0 h-[41.869px] w-[41.869px] -translate-x-[50%] -translate-y-[60%] rounded-full border-[2px] border-main bg-white tablet:h-[54px] tablet:w-[54px] tablet:-translate-y-[50%]">
        <LiaUser className="text-[32px] text-main" />
      </div>

      <h3 className="text-12lg font-semibold text-main tablet:text-[16px]">
        Visiter
      </h3>
      <p className="text-[8px] leading-[10px] text-neutralDarkHover tablet:text-12sm">
        Explore activities and connect <br /> with our community.
      </p>
    </div>
  );
}
