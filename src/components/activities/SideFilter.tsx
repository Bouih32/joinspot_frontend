import CategoryFilter from "./CategoryFilter";
import { nanoid } from "nanoid";
import { Category } from "@/libs/types";
import { getCachedCategories } from "@/libs/utils";
import LowerFilter from "./LowerFilter";

export default async function SideFilter() {
  const categories = await getCachedCategories();

  return (
    <aside className="relative hidden w-[204px] tablet:block laptop:w-[286px]">
      <section className="sticky top-[150px] flex flex-col gap-11 xl:gap-20">
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
