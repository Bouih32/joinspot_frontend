import { MdPeopleAlt } from "react-icons/md";

export default function Seats() {
  return (
    <div className="flex items-end gap-2">
      <MdPeopleAlt className="text-[16px] text-secondDark" />
      <p className="text-10xxl text-neutralDark">8/12 joined</p>
    </div>
  );
}
