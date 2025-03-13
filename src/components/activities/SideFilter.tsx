import CategoryFilter from "./CategoryFilter";
import { nanoid } from "nanoid";
import { Category } from "@/libs/types";
import { getCachedCategories } from "@/libs/utils";
import LowerFilter from "./LowerFilter";

export default async function SideFilter() {
  const categories = await getCachedCategories();

  return (
    <aside className="hidden h-[700px] w-[204px] flex-col justify-between tablet:flex laptop:w-[286px]">
      <div className="space-y-3">
        {categories.map((ele: Category) => (
          <CategoryFilter key={nanoid()} title={ele.categoryName} />
        ))}
      </div>
      <div className="flexBetween w-full rounded-[10px] bg-secondLight px-4 py-2 text-[20px] text-main">
        {["save", "own", "faq"].map((ele) => (
          <LowerFilter key={nanoid()} filter={ele} />
        ))}
      </div>
    </aside>
  );
}
