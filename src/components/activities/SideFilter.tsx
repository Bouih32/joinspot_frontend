import { FaRegBookmark, FaRegQuestionCircle } from "react-icons/fa";
import CategoryFilter from "./CategoryFilter";
import { MdChatBubbleOutline } from "react-icons/md";

export default function SideFilter() {
  return (
    <aside className="hidden h-[700px] w-[204px] flex-col justify-between tablet:flex laptop:w-[286px]">
      <div className="space-y-3">
        <CategoryFilter />
        <CategoryFilter />
        <CategoryFilter />
        <CategoryFilter />
      </div>
      <div className="flexBetween rounded-[10px] bg-secondLight px-4 py-5 text-[20px] text-main">
        <FaRegBookmark />
        <MdChatBubbleOutline />
        <FaRegQuestionCircle />
      </div>
    </aside>
  );
}
