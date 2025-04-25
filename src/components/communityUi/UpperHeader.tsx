import Container from "../Container";

import { getCachedCategories } from "@/libs/utils";

import { getToken } from "@/actions/decodeToken";
import MobileUpperHeader from "../activities/MobileUpperHeader";
import Search from "../activities/Search";
import AddButton from "../activities/add/AddButton";

export default async function UpperHeader() {
  const categories = await getCachedCategories();
  const token = await getToken();
  const role =
    typeof token !== "string" && token?.role ? token.role : undefined;

  return (
    <section className="sticky top-[38px] z-[500] bg-white pb-1 tablet:top-[62px]">
      <div className="border-b border-secondLightActive py-[6px] text-main tablet:bg-secondLight tablet:py-1 laptop:py-2.5">
        <Container classname="flex items-center justify-between tablet:justify-end tablet:gap-[14px]">
          <MobileUpperHeader categories={categories} />
          <Search />

          <AddButton role={role} post />
        </Container>
      </div>
      <Container classname="flex items-center justify-end gap-2 pt-[6px] tablet:hidden">
        <AddButton mobile role={role} post />
      </Container>
    </section>
  );
}
