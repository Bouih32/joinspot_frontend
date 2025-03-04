import Button from "@/components/Button";
import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";

export default function FinalStep() {
  return (
    <section className="flexCenter flex-col gap-5 text-center text-main laptop:gap-[30px]">
      <div className="space-y-3">
        <BiCheckCircle className="mx-auto text-[40px] tablet:text-[70px] laptop:text-[90px]" />
        <h3 className="text-20xxl tablet:text-26xxl">
          You have signed up <br /> successfully!
        </h3>
      </div>
      <p className="text-12lg text-neutralDarkHover tablet:text-16lg">
        Welcome aboard. Your account is now secure <br /> and ready to use.
      </p>
      <Link href="/login">
        <Button secondary>Done</Button>
      </Link>
    </section>
  );
}
