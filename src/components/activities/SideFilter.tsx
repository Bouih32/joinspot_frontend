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
    <aside className="sticky top-[calc(70px+62px)] hidden h-[calc(100vh-70px-62px)] w-[204px] overflow-y-auto pb-5 tablet:block laptop:w-[286px]">
      <section className="flex h-full w-full flex-col justify-between">
        <div className="space-y-3">
          {categories.map((ele: Category) => (
            <CategoryFilter key={nanoid()} title={ele.categoryName} />
          ))}
        </div>
        <div className="flexBetween sticky bottom-8 z-[5000] w-full rounded-[10px] bg-secondLight px-4 py-2 text-[20px] text-main xl:bottom-10">
          {["save", "own", "faq"].map((ele) => (
            <LowerFilter key={nanoid()} filter={ele} token={token} />
          ))}
        </div>
      </section>
    </aside>
  );
}
