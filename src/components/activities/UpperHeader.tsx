import { FaPlus } from "react-icons/fa";
import { IoFilter, IoSearch } from "react-icons/io5";
import Container from "../Container";
import MobileFilter from "./MobileFilter";
import Search from "./Search";
import MobileUpperHeader from "./MobileUpperHeader";
import MainFilters from "./mainFilters/MainFilters";
import { getCachedCategories } from "@/libs/utils";

export default async function UpperHeader() {
  const categories = await getCachedCategories();
  return (
    <section>
      <div className="border-b border-secondLightActive py-[6px] text-main tablet:bg-secondLight tablet:py-1 laptop:py-2.5">
        <Container classname="flex items-center justify-between tablet:justify-end tablet:gap-[14px]">
          <MobileUpperHeader categories={categories} />
          <Search />

          <MainFilters />
          <div className="hidden h-[30px] w-[30px] cursor-pointer place-content-center rounded-full border border-secondHover text-secondHover tablet:grid tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:text-white">
            <FaPlus />
          </div>
        </Container>
      </div>

      <Container classname="flex items-center justify-end gap-2 pt-[6px] tablet:hidden">
        <div className="grid h-[30px] w-[30px] cursor-pointer place-content-center rounded-full border border-secondHover text-secondHover tablet:h-[35px] tablet:w-[35px] tablet:border-none tablet:bg-main tablet:text-white">
          <FaPlus />
        </div>

        <MainFilters mobile />
      </Container>
    </section>
  );
}
