import CategoryFilter from "./CategoryFilter";
import { nanoid } from "nanoid";
import { Category } from "@/libs/types";
import { getCachedCategories } from "@/libs/utils";
import LowerFilter from "./LowerFilter";
import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";

export default async function SideFilter() {
  const categories = await getCachedCategories();
  const token = await getToken();
  let role: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
  }

  return (
    <aside className="sticky top-[70px] hidden h-[calc(100vh-155px)] w-[204px] tablet:block laptop:w-[286px] xl:h-[calc(100vh-400px)]">
      <section className="flex h-full flex-col justify-between">
        <div className="space-y-3">
          {categories.map((ele: Category) => (
            <CategoryFilter key={nanoid()} title={ele.categoryName} />
          ))}
        </div>
        <div className="flexBetween z-[5000] w-full rounded-[10px] bg-secondLight px-4 py-2 text-[20px] text-main">
          {["save", "own", "faq"].map((ele) => (
            <LowerFilter key={nanoid()} filter={ele} token={token} />
          ))}
        </div>
      </section>
    </aside>
  );
}
