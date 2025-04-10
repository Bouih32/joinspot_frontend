import CityFilter from "./CityFilter";
import CategoryFilter from "./CategoryFilter";

export default function HeroFilter() {
  return (
    <div className="flexBetween w-[328px] justify-self-center rounded border border-neutralLight bg-white py-[6px] text-14sm text-main tablet:w-[432px]">
      <div className="grid flex-1 grid-cols-2 divide-x-[2px] divide-neutralLight">
        <CityFilter />
        <CategoryFilter />
      </div>
    </div>
  );
}
