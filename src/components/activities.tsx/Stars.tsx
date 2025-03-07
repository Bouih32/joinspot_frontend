import { FaStar } from "react-icons/fa6";

export default function Stars() {
  return (
    <div className="flex gap-1 text-[12px] tablet:gap-[6px] tablet:text-[16px]">
      <FaStar className="text-alert" />
      <FaStar className="text-alert" />
      <FaStar className="text-alert" />
      <FaStar className="text-alert" />
      <FaStar className="text-neutral/20" />
    </div>
  );
}
