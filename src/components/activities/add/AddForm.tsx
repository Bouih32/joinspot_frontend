"use client";

import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { addValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";
import { z } from "zod";
import AddInput from "./AddInput";

type addType = z.infer<typeof addValidation>;
export default function AddForm() {
  const {
    register,
    trigger,
    formState: { errors },
    setError,
    getValues,
    setValue,
  } = useForm<addType>({
    resolver: zodResolver(addValidation),
  });
  return (
    <form className="flex gap-[36px]">
      <section className="flex gap-[36px]">
        <div className="flex flex-col items-start gap-2 laptop:items-center">
          <div className="flexCenter h-[130px] w-[239px] flex-col rounded-[8px] bg-[#F8F8F8] text-center text-10xl text-secondDark tablet:h-[200px] tablet:w-[280px] laptop:h-[235px] laptop:w-[384px]">
            <BiImageAdd className="text-[24px]" />
            <p>
              Add activity <br /> image
            </p>
          </div>
          <div className="flexCenter gap-[5px] text-[10px] font-semibold text-neutralDarkHover">
            <MdOutlineStar className="text-neutralActive" />
            <p>
              Recommended size is :{" "}
              <span className="font-bold text-main">550 x 350 px</span>
            </p>
          </div>
        </div>

        <div className="space-y-[18px] tablet:w-[291px] laptop:w-[288px]">
          <AddInput<addType>
            placeholder="Your full name"
            register={register}
            name="title"
            type="text"
            error={errors.title?.message as string}
            classname="border-secondLightActive text-secondDark "
          />
          <TextArea<addType>
            placeholder="description"
            register={register}
            name="description"
            error={errors.description?.message as string}
          />
          <AddInput<addType>
            placeholder="Your full name"
            register={register}
            name="title"
            type="text"
            error={errors.title?.message as string}
            classname="border-secondLightActive text-secondDark "
          />
        </div>
      </section>
      <section className="tablet:w-[291px] laptop:w-[288px]">
        <AddInput<addType>
          placeholder="Your full name"
          register={register}
          name="title"
          type="text"
          error={errors.title?.message as string}
          classname=" text-secondDark text-12sm xl:py-[3px]"
        />
      </section>
    </form>
  );
}
