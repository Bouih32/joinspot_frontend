import Container from "../Container";

import { cn, getCachedCategories } from "@/libs/utils";

import { getToken } from "@/actions/decodeToken";
import MobileUpperHeader from "../activities/MobileUpperHeader";
import Search from "../activities/Search";
import AddButton from "../activities/add/AddButton";
import { GoPlus } from "react-icons/go";
import Link from "next/link";

export default async function UpperHeader() {
  const categories = await getCachedCategories();
  const token = await getToken();
  const role =
    typeof token !== "string" && token?.role ? token.role : undefined;

  return (
    <section className="sticky top-[38px] z-[500] bg-white pb-1 tablet:top-[63px]">
      <div className="border-b border-secondLightActive py-[6px] text-main tablet:bg-secondLight tablet:py-1 laptop:py-2.5">
        <Container classname="flex items-center justify-between tablet:justify-end tablet:gap-[14px]">
          <MobileUpperHeader categories={categories} />
          <Search />
          <Link
            href="/community/add"
            className={cn(
              "hidden h-[30px] w-[30px] cursor-pointer place-content-center rounded-full border border-secondHover text-secondHover tablet:grid tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:text-white",
            )}
          >
            <GoPlus className="text-[20px]" />
          </Link>
        </Container>
      </div>
      <Container classname="flex items-center justify-end gap-2 pt-[6px] tablet:hidden">
        <Link
          href="/community/add"
          className={cn(
            "grid h-[30px] w-[30px] cursor-pointer place-content-center rounded-full border border-secondHover text-secondHover tablet:grid tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:text-white",
          )}
        >
          <GoPlus className="text-[20px]" />
        </Link>
      </Container>
    </section>
  );
}
