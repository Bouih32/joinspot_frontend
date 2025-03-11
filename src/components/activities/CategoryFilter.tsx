import { MdOutlineSportsBaseball } from "react-icons/md";

export default function CategoryFilter() {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-[5px] px-2 py-3 text-14lg text-darker hover:bg-secondLight hover:text-14xxl hover:text-main laptop:py-5">
      <MdOutlineSportsBaseball className="text-[20px]" />
      <p>Sport</p>
    </div>
  );
}
