import { BsArrowLeftShort } from "react-icons/bs";

export default function GoBack({ goBack }: { goBack: () => void }) {
  return (
    <BsArrowLeftShort
      onClick={goBack}
      className="absolute left-[50px] top-[50px] hidden cursor-pointer text-[40px] hover:text-main tablet:block laptop:left-[96px] laptop:top-[61px]"
    />
  );
}
