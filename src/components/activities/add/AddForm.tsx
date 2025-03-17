"use client";

import TextArea from "@/components/TextArea";
import { addValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AddInput from "./AddInput";
import AddImage from "./AddImage";
import Button from "@/components/Button";
import SelectTag from "./SelectTag";

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
    <form className="flex flex-col gap-[21px] tablet:gap-[36px]">
      <div className="flex flex-col gap-[21px] tablet:gap-[36px] laptop:flex-row">
        <section className="flex flex-col items-center gap-[21px] tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-[36px]">
          <AddImage />

          <div className="w-full space-y-[10px] tablet:w-[291px] tablet:space-y-[18px] laptop:w-[288px]">
            <AddInput<addType>
              placeholder="Activity title"
              register={register}
              name="title"
              type="text"
              error={errors.title?.message as string}
            />
            <TextArea<addType>
              placeholder="Description"
              register={register}
              name="description"
              error={errors.description?.message as string}
            />
            <SelectTag />
          </div>
        </section>
        <section className="flex w-full flex-col gap-[10px] tablet:flex-row tablet:justify-between tablet:gap-[18px] laptop:w-[288px] laptop:flex-col laptop:justify-start">
          <div className="space-y-[10px] tablet:w-[288px] tablet:space-y-[18px] laptop:w-full">
            <AddInput<addType>
              placeholder="Your full name"
              register={register}
              name="title"
              type="text"
              error={errors.title?.message as string}
            />
            <div className="flex flex-col gap-[10px] tablet:gap-[18px] laptop:flex-row laptop:gap-[14px]">
              <AddInput<addType>
                placeholder="Your full name"
                register={register}
                name="title"
                type="text"
                error={errors.title?.message as string}
              />
              <AddInput<addType>
                placeholder="Your full name"
                register={register}
                name="title"
                type="text"
                error={errors.title?.message as string}
              />
            </div>
          </div>
          <div className="space-y-[10px] tablet:w-[288px] tablet:space-y-[18px] laptop:w-full">
            <AddInput<addType>
              placeholder="Your full name"
              register={register}
              name="title"
              type="text"
              error={errors.title?.message as string}
            />
            <AddInput<addType>
              placeholder="Number of seats"
              register={register}
              name="seat"
              type="text"
              error={errors.title?.message as string}
            />
            <AddInput<addType>
              placeholder="Price"
              register={register}
              name="price"
              type="text"
              error={errors.price?.message as string}
            />
          </div>
        </section>
      </div>
      <div className="flex gap-2 self-end">
        <Button secondary>Cancel</Button> <Button>Post</Button>
      </div>
    </form>
  );
}
