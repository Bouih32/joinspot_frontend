import Image from "next/image";
import empty from "../../../public/images/empty.png";

export default function NoActivities() {
  return (
    <section className="space-y-5 text-center">
      <Image
        src={empty}
        alt="empty"
        height={327}
        width={517}
        className="h-[207px] w-[327px] object-contain tablet:h-[327px] tablet:w-[517px]"
      />
      <div className="">
        <h1 className="text-16xxl text-main">No Saved Posts Yet!</h1>
        <p className="text-14xxl text-secondActive">
          Save activities you’re interested in and easily find them here later.
        </p>
      </div>
    </section>
  );
}
