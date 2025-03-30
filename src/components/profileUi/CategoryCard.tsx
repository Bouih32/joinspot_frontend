import { FaRegCompass, FaRegLightbulb } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdOutlineSportsBaseball,
  MdSportsBasketball,
} from "react-icons/md";
import { PiChefHatBold } from "react-icons/pi";

type CategoryCardProps = {
  categoryId: string;
  categoryName: string;
  selectCategory: (id: string) => void;
};

export default function CategoryCard({
  categoryId,
  categoryName,
  selectCategory,
}: CategoryCardProps) {
  const icon =
    categoryName === "cuisine" ? (
      <PiChefHatBold />
    ) : categoryName === "sport" ? (
      <MdOutlineSportsBaseball />
    ) : categoryName === "learning" ? (
      <FaRegLightbulb />
    ) : (
      <FaRegCompass />
    );
  return (
    <div
      onClick={() => selectCategory(categoryId)}
      className="flexBetween group border-t-[0.5px] border-neutralLightActive py-2 text-12lg text-neutral transition-all duration-75 hover:rounded-[8px] hover:bg-main hover:px-2.5 hover:font-semibold hover:text-white tablet:text-16lg"
    >
      <div className="flex items-center gap-2.5">
        {icon}
        <p className="hidden first-letter:uppercase tablet:block">
          {categoryName}
        </p>
      </div>
      <MdKeyboardArrowRight className="hidden group-hover:block" />
    </div>
  );
}
