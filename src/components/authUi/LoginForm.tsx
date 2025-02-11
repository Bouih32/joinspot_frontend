import React from "react";
import Input from "../Input";
import Link from "next/link";
import Button from "../Button";

export default function LoginForm() {
  return (
    <form className="flexCenter flex-col gap-[28px] tablet:w-[440px] laptop:w-[412px]">
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <Input placeholder="User name" />
        <Input placeholder="Password" />
        <div className="flexBetween text-10sm text-secondActive tablet:text-12sm">
          <p>
            You don’t have account ?
            <Link href="/singup" className="font-semibold text-main">
              Sign in
            </Link>
          </p>
          <Link href="/reset" className="underline">
            Forget password?
          </Link>
        </div>
      </div>
      <Button secondary>Login</Button>
    </form>
  );
}
