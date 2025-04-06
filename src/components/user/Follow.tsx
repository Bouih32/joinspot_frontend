import { BsFillPersonDashFill, BsFillPersonPlusFill } from "react-icons/bs";
import Button from "../Button";

export default function Follow() {
  return (
    <div>
      <Button classname="p-2 tablet:p-2 " icon={<BsFillPersonPlusFill />} />
      {/* <BsFillPersonDashFill /> */}
    </div>
  );
}
