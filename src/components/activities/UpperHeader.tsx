import Container from "../Container";
import Search from "./Search";
import MobileUpperHeader from "./MobileUpperHeader";
import MainFilters from "./mainFilters/MainFilters";
import { getCachedCategories } from "@/libs/utils";
import { GoPlus } from "react-icons/go";

export default async function UpperHeader() {
  const categories = await getCachedCategories();
  return (
    <section className="top-[62.5px] z-[500] tablet:sticky">
      <div className="border-b border-secondLightActive py-[6px] text-main tablet:bg-secondLight tablet:py-1 laptop:py-2.5">
        <Container classname="flex items-center justify-between tablet:justify-end tablet:gap-[14px]">
          <MobileUpperHeader categories={categories} />
          <Search />

          <MainFilters />
          <div className="hidden h-[30px] w-[30px] cursor-pointer place-content-center rounded-full border border-secondHover text-secondHover tablet:grid tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:text-white">
            <GoPlus className="text-[20px]" />
          </div>
        </Container>
      </div>

      <Container classname="flex items-center justify-end gap-2 pt-[6px] tablet:hidden">
        <div className="grid h-[30px] w-[30px] cursor-pointer place-content-center rounded-full border border-secondHover text-secondHover tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:text-white">
          <GoPlus className="text-[20px]" />
        </div>

        <MainFilters mobile />
      </Container>
    </section>
  );
}
