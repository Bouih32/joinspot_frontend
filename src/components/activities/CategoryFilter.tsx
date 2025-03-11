import { MdOutlineSportsBaseball } from "react-icons/md";

export default function CategoryFilter() {
  return (
    <div className="flex items-center gap-3 rounded-[5px] bg-secondLight px-2 py-3 text-darker laptop:py-5">
      <MdOutlineSportsBaseball className="text-[20px]" />
      <p className="text-14lg">Sport</p>
    </div>
  );
}
