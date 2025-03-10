import ContactInput from "./ContactInput";
import { nanoid } from "nanoid";
import SupportRadio from "./SupportRadio";
import Button from "@/components/Button";

export default function ContactForm() {
  return (
    <form className="flex flex-1 flex-col space-y-5 px-4 pt-[30px] tablet:space-y-[45px] tablet:pt-[70px] laptop:px-20 laptop:pt-[56px]">
      <div className="flex w-full flex-col gap-5 tablet:flex-row tablet:justify-between">
        <ContactInput />
        <ContactInput />
      </div>
      <div className="flex w-full flex-col gap-5 tablet:flex-row tablet:justify-between">
        <ContactInput />
        <ContactInput />
      </div>
      <div className="space-y-2.5 tablet:space-y-[14px]">
        <h3 className="text-14xxl text-main">Select Subject?</h3>
        <div className="grid grid-cols-2 items-start justify-between gap-y-[14px] tablet:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <SupportRadio key={nanoid()} id={index.toString()}>
              General Inquiry
            </SupportRadio>
          ))}
        </div>
      </div>

      <ContactInput />
      <Button classname="text-12lg py-2.5  tablet:mt-0 px-6 tablet:py-2.5 tablet:px-6 self-center tablet:self-end ">
        Send Message
      </Button>
    </form>
  );
}
