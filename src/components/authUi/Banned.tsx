import Link from "next/link";
import Button from "../Button";
import { RiAdminLine } from "react-icons/ri";

export default function Banned() {
  return (
    <section className="flexCenter flex-col gap-5 text-center text-main laptop:gap-[30px]">
      <div className="space-y-3">
        <RiAdminLine className="mx-auto text-[40px] tablet:text-[70px] laptop:text-[90px]" />
        <h3 className="text-20xxl tablet:text-26xxl">
          Looks like you
          <br /> are banned!
        </h3>
      </div>
      <p className="text-12lg text-neutralDarkHover tablet:text-16lg">
        Welcome aboard. Your account is now suspended <br /> and can't be used.
      </p>
      <Link href="/support">
        <Button secondary>Contact us</Button>
      </Link>
    </section>
  );
}
