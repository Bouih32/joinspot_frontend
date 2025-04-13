"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import background from "../../public/images/quationsign.png";
import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);
  return (
    <section className="flex">
      <div className="mx-auto mt-[117px] flex flex-col items-center gap-[25px] text-center md:ml-[80px] md:mt-[109px] md:w-1/2 md:items-start md:text-start">
        <h1 className="font-poppins text-[56px] font-bold leading-[56px] text-second md:text-[72px] md:leading-[77px] lg:text-[97px] lg:leading-[107px]">
          Oops ,<br />
          wrong turn
        </h1>
        <p className="max-w-[252px] text-[14px] font-normal text-neutralDark md:text-[16px] lg:text-[20px]">
          Looks like you've wandered off the beaten path. Our team is working to
          get you back on track and find what you're looking for.
        </p>

        <Link href="/">
          <Button secondary>
            <BsArrowLeftCircleFill />
            Back home
          </Button>
        </Link>
      </div>
      <div className="bottom-0 right-0 hidden w-1/2 md:fixed md:block">
        <img
          src="https://i.postimg.cc/mr6n6TpN/quationsign.png"
          alt="background image"
          className="max-w-[full]"
        />
      </div>
    </section>
  );
}
