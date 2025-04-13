import Button from "@/components/Button";
import Image from "next/image";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid h-screen overflow-hidden tablet:grid-cols-2">
      <div className="hidden bg-[url('https://i.postimg.cc/wMrnygLj/arrow-Hand.png')] bg-cover bg-center md:block"></div>

      <div className="mx-auto my-auto flex flex-col items-center justify-center gap-[25px] text-center">
        <h1 className="text-[100px] font-bold text-main md:text-[150px] lg:text-[200px]">
          404
        </h1>
        <h2 className="font-poppins text-[26px] font-bold text-second md:text-[32px] lg:text-[40px]">
          Page Not Found
        </h2>
        <p className="max-w-[395px] text-[12px] font-semibold text-neutralDark md:text-[14px] lg:text-[16px]">
          We're sorry, the page you requested could not be found. Please go back
          to the homepage!
        </p>

        <Link href="/">
          <Button
            secondary
            icon={<BsArrowLeftCircleFill />}
            classname="flex-row-reverse"
          >
            Back home
          </Button>
        </Link>
      </div>
    </section>
  );
}
