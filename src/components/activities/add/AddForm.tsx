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
import SelectCity from "./SelectCity";
import { BiSolidTime } from "react-icons/bi";
import { MdChair } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import SelectDay from "./SelectDay";
import Link from "next/link";

type addType = z.infer<typeof addValidation>;
export default function AddForm() {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<addType>({
    resolver: zodResolver(addValidation),
  });

  const addTag = (tags: string) => {
    setValue("tags", tags);
  };

  const addCity = (city: string) => {
    setValue("cityId", city);
  };

  const addDay = (day: string[]) => {
    setValue("startDay", day[0]);
    setValue("endDay", day[1]);
  };

  const addCover = (cover: string) => {
    setValue("coverPic", cover);
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    console.log(formData);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-[21px] tablet:gap-[36px]"
    >
      {Object.keys(errors).length > 0 && (
        <div className="w-full rounded border-error bg-errorHover py-1 text-center text-10xxl text-error tablet:text-12xxl">
          <p className="hidden tablet:block">
            Oops! Please fill in all required fields before publishing your
            activity.
          </p>
          <p className="tablet:hidden">
            Please complete all required fields before submitting.
          </p>
        </div>
      )}
      <div className="flex flex-col gap-[21px] tablet:gap-[36px] laptop:flex-row">
        <section className="flex flex-col items-center gap-[21px] tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-[36px]">
          <AddImage
            addCover={addCover}
            error={errors.coverPic?.message as string}
          />

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
            <SelectTag addTag={addTag} error={errors.tags?.message as string} />
          </div>
        </section>

        <section className="flex w-full flex-col gap-[10px] tablet:flex-row tablet:justify-between tablet:gap-[18px] laptop:w-[288px] laptop:flex-col laptop:justify-start">
          <div className="space-y-[10px] tablet:w-[288px] tablet:space-y-[18px] laptop:w-full">
            <SelectDay
              addDay={addDay}
              error={errors.startDay?.message as string}
            />
            <div className="flex flex-col gap-[10px] tablet:gap-[18px] laptop:flex-row laptop:gap-[14px]">
              <AddInput<addType>
                placeholder="Start time (8AM ..)"
                register={register}
                name="startTime"
                type="text"
                error={errors.startTime?.message as string}
                icon={<BiSolidTime className="text-[18px]" />}
              />
              <AddInput<addType>
                placeholder="End time (12PM ..)"
                register={register}
                name="endTime"
                type="text"
                error={errors.endTime?.message as string}
                icon={<BiSolidTime className="text-[18px]" />}
              />
            </div>
          </div>
          <div className="space-y-[10px] tablet:w-[288px] tablet:space-y-[18px] laptop:w-full">
            <SelectCity<addType>
              addCity={addCity}
              error={
                errors.cityId?.message || (errors.location?.message as string)
              }
              register={register}
              name="location"
            />
            <AddInput<addType>
              placeholder="Number of seats"
              register={register}
              name="seat"
              type="text"
              error={errors.seat?.message as string}
              icon={<MdChair className="text-[18px]" />}
            />
            <AddInput<addType>
              placeholder="Price"
              register={register}
              name="price"
              type="text"
              error={errors.price?.message as string}
              icon={<AiFillDollarCircle className="text-[18px]" />}
            />
          </div>
        </section>
      </div>
      <div className="flex gap-2 self-end">
        <Link
          href="/activities"
          className="flexCenter w-fit cursor-pointer gap-2 rounded border border-main bg-transparent px-3 py-[3px] font-openSans text-14xl text-main outline-none tablet:px-4 tablet:py-[6px]"
        >
          Cancel
        </Link>

        <Button>Post</Button>
      </div>
    </form>
  );
}
