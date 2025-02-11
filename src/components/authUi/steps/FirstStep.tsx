import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function FirstStep() {
  return (
    <form className="flexCenter flex-col gap-[28px] text-12sm text-secondActive tablet:w-[440px] tablet:text-center laptop:w-[412px]">
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <Input placeholder="User name" />
        <Input placeholder="Password" />
        <Input placeholder="Password" />

        <p className="">
          You already have an account !
          <Link href="/login" className="font-semibold text-main underline">
            Login
          </Link>
        </p>
      </div>
      <p>Take the experience as : </p>
      <Button secondary icon>
        Next
      </Button>
    </form>
  );
}
