import { FaCalendarDay } from "react-icons/fa6";

export default function HeroFilter() {
  return (
    <div className="flexBetween w-full justify-self-center rounded bg-white px-3 py-[6px] text-14sm text-main tablet:w-[432px]">
      <div className="grid flex-1 grid-cols-2 divide-x-[2px] divide-neutralLight">
        <span>Cities</span>
        <span className="pl-2">Date</span>
      </div>
      <FaCalendarDay />
    </div>
  );
}
