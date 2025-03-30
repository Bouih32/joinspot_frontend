import { MdKeyboardArrowRight, MdSportsBasketball } from "react-icons/md";

export default function CategoryCard() {
  return (
    <div className="flexBetween group border-t-[0.5px] border-neutralLightActive py-2 text-12lg text-neutral transition-all duration-75 hover:rounded-[8px] hover:bg-main hover:px-2.5 hover:font-semibold hover:text-white tablet:text-16lg">
      <div className="flex items-center gap-2.5">
        <MdSportsBasketball />
        <p className="hidden tablet:block">Sport</p>
      </div>
      <MdKeyboardArrowRight className="hidden group-hover:block" />
    </div>
  );
}
