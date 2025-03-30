import Image from "next/image";
import placeholder from "../../../public/images/profilPrompt.png";
import Button from "../Button";
import UpdateLink from "./UpdateLink";

export default function VisitorCTA() {
  return (
    <section className="flexCenter mt-[90px] flex-col gap-[30px] text-center">
      <Image
        src={placeholder}
        alt="visitor cta"
        height={295}
        width={376}
        className="h-[188px] w-[291px] tablet:h-[238px] tablet:w-[303px] laptop:h-[295px] laptop:w-[376px]"
      />
      <div className="space-y-3">
        <h3 className="text-16xl text-secondDark tablet:text-22xl">
          Become an Organizer and Create Your Own Events!
        </h3>
        <p className="tabet:text-14sm text-12sm text-neutralHover tablet:w-[541px]">
          Do you have a passion to share? By becoming an Organizer on our
          platform, you can create and manage your own events, attract
          participants, and host unique experiences. Whether it’s sports
          meetups, creative workshops, or themed gatherings, you have the power
          to inspire and bring people together.
        </p>
      </div>
      <UpdateLink />
    </section>
  );
}
