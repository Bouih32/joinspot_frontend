import { MdPeopleAlt } from "react-icons/md";

type SeatsProps = {
  seat: number;
  joined: number;
};

export default function Seats({ seat, joined }: SeatsProps) {
  return (
    <div className="flex items-end gap-2">
      <MdPeopleAlt className="text-[16px] text-secondDark" />
      <p className="text-10xxl text-neutralDark">
        {joined}/{seat} joined
      </p>
    </div>
  );
}
