import Container from "../Container";
import Search from "./Search";
import MobileUpperHeader from "./MobileUpperHeader";
import MainFilters from "./mainFilters/MainFilters";
import { getCachedCategories } from "@/libs/utils";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import AddButton from "./add/AddButton";

export default async function UpperHeader() {
  const categories = await getCachedCategories();
  return (
    <section className="top-[62.5px] z-[500]">
      <div className="border-b border-secondLightActive py-[6px] text-main tablet:bg-secondLight tablet:py-1 laptop:py-2.5">
        <Container classname="flex items-center justify-between tablet:justify-end tablet:gap-[14px]">
          <MobileUpperHeader categories={categories} />
          <Search />

          <MainFilters />
          <AddButton />
        </Container>
      </div>

      <Container classname="flex items-center justify-end gap-2 pt-[6px] tablet:hidden">
        <AddButton mobile />

        <MainFilters mobile />
      </Container>
    </section>
  );
}
