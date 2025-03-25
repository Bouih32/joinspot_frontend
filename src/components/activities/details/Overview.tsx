import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdLocationOn, MdPeopleAlt } from "react-icons/md";
import placeholder from "../../../../public/images/activityImg.jpg";
import { FaShareSquare } from "react-icons/fa";
import Save from "../Save";

export default function Overview() {
  return (
    <section className="flex flex-col-reverse gap-4 overflow-hidden rounded-xl bg-secondLight p-3 shadow-8xl tablet:flex-row tablet:gap-0 tablet:p-0">
      <div className="tablet:rounded-0 rounded-[8px] tablet:h-[379px] tablet:w-[400px] laptop:w-[610px]">
        <Image
          src={placeholder}
          alt="placeholder"
          width={610}
          height={493}
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 tablet:px-[35px]">
        <div className="space-y-[14px]">
          <h1 className="text-16xxl text-main laptop:text-26xxl">
            Sunset Beach Yoga & Meditation
          </h1>
          <div className="flexBetween">
            <div className="flexCenter gap-2">
              <Image
                src={placeholder}
                alt="avatar"
                height={38}
                width={38}
                className="h-[46px] w-[46px] rounded-full object-cover object-center"
              />
              <div className="flex flex-col">
                <h1 className="text-14xl text-darker">Sophie Calzoni</h1>
                <span className="text-12xl text-neutralDark">Sport</span>
              </div>
            </div>
            <div className="flexCenter gap-2">
              <Save id="jiqdjdhhh" />
              <div className="z-40 w-fit cursor-pointer rounded-md bg-white p-[5px] text-main">
                <FaShareSquare />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="h-[22px] w-fit rounded-[20px] bg-second px-2.5 text-14sm text-white">
              exercice
            </p>
            <p className="h-[22px] w-fit rounded-[20px] bg-second px-2.5 text-14sm text-white">
              exercice
            </p>
          </div>
        </div>
        <div className="space-y-4 text-12xxl text-secondActive">
          <h1 className="text-14xl text-main laptop:text-20xl">
            Quick Overview
          </h1>
          <div className="flex items-center justify-start gap-2 pl-1">
            <MdLocationOn className="text-[24px]" />
            <p>Agadir, Taghazout in front of Café Amouage </p>
          </div>
          <div className="flex items-center justify-start gap-2 pl-2">
            <BsFillCalendarDateFill className="text-[18px]" />
            <p>Saturday, March 15, 2025 – 6:00 PM </p>
          </div>
          <div className="flex items-center justify-start gap-2 pl-2">
            <MdPeopleAlt className="text-[24px]" />
            <p>8/12 joined </p>
          </div>
          <div className="flexBetween text-14xl text-main">
            <p>
              From 150DH{" "}
              <span className="text-12sm text-neutralDark">per person</span>
            </p>
            <Link href="#">
              <Button>Join</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
