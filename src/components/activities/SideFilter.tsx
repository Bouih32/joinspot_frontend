import CategoryFilter from "./CategoryFilter";
import { nanoid } from "nanoid";
import { Category } from "@/libs/types";
import { getCachedCategories } from "@/libs/utils";
import LowerFilter from "./LowerFilter";

export default async function SideFilter() {
  const categories = await getCachedCategories();

  return (
    <aside className="sticky top-[151px] hidden h-[calc(100vh-160px)] w-[204px] tablet:block laptop:w-[286px] xl:h-[calc(100vh-400px)]">
      <section className="flex h-full flex-col justify-between">
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
      </section>
    </aside>
  );
}
