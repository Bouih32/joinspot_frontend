import Container from "../Container";
import Search from "./Search";
import MobileUpperHeader from "./MobileUpperHeader";
import MainFilters from "./mainFilters/MainFilters";
import { getCachedCategories } from "@/libs/utils";
import AddButton from "./add/AddButton";
import { getToken } from "@/actions/decodeToken";

export default async function UpperHeader() {
  const categories = await getCachedCategories();
  const token = await getToken();
  const role =
    typeof token !== "string" && token?.role ? token.role : undefined;

  return (
    <section className="sticky top-[62px] z-[500] bg-white">
      {" "}
      {/* or whatever background color you need */}
      <div className="border-b border-secondLightActive py-[6px] text-main tablet:bg-secondLight tablet:py-1 laptop:py-2.5">
        <Container classname="flex items-center justify-between tablet:justify-end tablet:gap-[14px]">
          <MobileUpperHeader categories={categories} />
          <Search />
          <MainFilters />
          <AddButton role={role} />
        </Container>
      </div>
      <Container classname="flex items-center justify-end gap-2 pt-[6px] tablet:hidden">
        <AddButton mobile role={role} />
        <MainFilters mobile />
      </Container>
    </section>
  );
}
