import { CgAdd } from "react-icons/cg";

export default function TagCard() {
  return (
    <div className="flex items-center gap-2.5 border-t-[0.5px] border-neutralLightActive py-2 text-12lg text-neutral transition-all duration-75 hover:rounded-[8px] hover:bg-main hover:pl-2.5 hover:font-semibold hover:text-white tablet:text-16lg">
      <CgAdd />
      <p>Sport</p>
    </div>
  );
}
