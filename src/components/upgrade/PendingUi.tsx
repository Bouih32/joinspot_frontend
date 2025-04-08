import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";
import Button from "../Button";

export default function PendingUi() {
  return (
    <section className="flexCenter flex-col gap-5 pb-10 text-center text-main laptop:gap-[30px]">
      <div className="space-y-3">
        <BiCheckCircle className="mx-auto text-[40px] tablet:text-[70px] laptop:text-[90px]" />
        <h3 className="text-20xxl tablet:text-26xxl">
          Looks like your request <br /> is pending!
        </h3>
      </div>
      <p className="text-12lg text-neutralDarkHover tablet:text-16lg">
        Please wait. Your account is being verified by our admins ,<br /> you
        will be updated as soon as possible.
      </p>
      <Link href="/">
        <Button secondary>Ok</Button>
      </Link>
    </section>
  );
}
