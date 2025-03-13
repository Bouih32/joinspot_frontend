import { FaRegBookmark, FaRegQuestionCircle } from "react-icons/fa";
import CategoryFilter from "./CategoryFilter";
import { MdChatBubbleOutline } from "react-icons/md";
import { getCategoriesServer } from "@/actions/getCategory";
import { unstable_cache } from "next/cache";
import { nanoid } from "nanoid";
import { Category } from "@/libs/types";
import { getCachedCategories } from "@/libs/utils";

export default async function SideFilter() {
  const categories = await getCachedCategories();

  return (
    <aside className="hidden h-[700px] w-[204px] flex-col justify-between tablet:flex laptop:w-[286px]">
      <div className="space-y-3">
        {categories.map((ele: Category) => (
          <CategoryFilter key={nanoid()} title={ele.categoryName} />
        ))}
      </div>
      <div className="flexBetween rounded-[10px] bg-secondLight px-4 py-5 text-[20px] text-main">
        <FaRegBookmark />
        <MdChatBubbleOutline />
        <FaRegQuestionCircle />
      </div>
    </aside>
  );
}
