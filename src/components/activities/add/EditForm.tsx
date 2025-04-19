"use client";

import TextArea from "@/components/TextArea";
import { addValidation, editValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AddImage from "./AddImage";
import Button from "@/components/Button";
import { MdChair } from "react-icons/md";
import { AiFillDollarCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SaveContext } from "@/contexts/SaveContext";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSolidTime } from "react-icons/bi";
import { editActT } from "@/libs/types";
import EditTag from "./EditTag";
import { updateActivity } from "@/actions/getActivities";

type editType = z.infer<typeof editValidation>;
export default function EditForm({
  userCategory,
  activity,
}: {
  userCategory: string;
  activity: editActT;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const context = useContext(SaveContext);
  if (!context) return;
  const { handleSuccess } = context;

  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<editType>({
    resolver: zodResolver(editValidation),
    defaultValues: {
      coverPic: activity.coverPic,
      description: activity.description,
      tags: activity.tags.map((ele) => ele.tagId).join("-"),
    },
  });

  const addTag = (tags: string) => {
    setValue("tags", tags);
  };

  const addCover = (cover: string) => {
    setValue("coverPic", cover);
  };

  const handleSubmit = async () => {
    console.log(errors);
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    console.log(formData);
    setLoading(true);
    await updateActivity(formData, activity.activityId);
    setLoading(false);
    router.push(`/activities/${activity.activityId}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-[21px] tablet:gap-5"
    >
      {Object.keys(errors).length > 0 && (
        <div className="w-full rounded border border-error bg-errorHover py-1 text-center text-10xxl text-error tablet:text-12xxl">
          <p className="hidden tablet:block">
            Oops! Please fill in all required fields before publishing your
            activity.
          </p>
          <p className="tablet:hidden">
            Please complete all required fields before submitting.
          </p>
        </div>
      )}
      <div className="flex flex-col gap-[21px] tablet:gap-5 laptop:flex-row">
        <section className="flex flex-col items-center gap-[21px] tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-5">
          <AddImage
            cover={activity.coverPic}
            addCover={addCover}
            error={errors.coverPic?.message as string}
          />

          <div className="w-full space-y-[10px] tablet:w-[291px] tablet:space-y-[18px] laptop:w-[288px]">
            <div className="space-y-[6px]">
              <div className="flexBetween h-[30px] w-full gap-2 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[12px] leading-[24px] text-secondDark">
                <p className="line-clamp-1 h-full w-full overflow-hidden bg-transparent text-14sm caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none tablet:text-14sm">
                  {activity.title}
                </p>
              </div>
            </div>
            <TextArea<editType>
              placeholder={activity.description}
              register={register}
              name="description"
              error={errors.description?.message as string}
            />
            <EditTag
              activityTags={activity.tags}
              addTag={addTag}
              error={errors.tags?.message as string}
              userCategory={userCategory}
            />
          </div>
        </section>

        <section className="flex w-full flex-col gap-[10px] tablet:flex-row tablet:gap-[48px] laptop:w-[288px] laptop:flex-col laptop:justify-start laptop:gap-[18px]">
          <div className="space-y-[10px] tablet:w-[288px] tablet:space-y-[18px] laptop:w-full">
            <div className="flexBetween h-[30px] w-full rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] leading-[24px] text-secondDark">
              <p className="font-semibold text-main">{activity.startDay}</p>

              <div className="flexCenter gap-1">
                <BsFillCalendarDateFill />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] tablet:gap-[18px] laptop:flex-row laptop:gap-[14px]">
              <div className="flexBetween h-[30px] w-full gap-2 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[12px] leading-[24px] text-secondDark">
                <p className="text-14sm caret-main">{activity.startTime}</p>

                <BiSolidTime className="text-[18px]" />
              </div>
              <div className="flexBetween h-[30px] w-full gap-2 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[12px] leading-[24px] text-secondDark">
                <p className="text-14sm caret-main">{activity.endTime}</p>

                <BiSolidTime className="text-[18px]" />
              </div>
            </div>
          </div>
          <div className="space-y-[10px] tablet:w-[288px] tablet:space-y-[18px] laptop:w-full">
            <div className="flexBetween h-[30px] w-full rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] leading-[24px] text-secondDark">
              <div className="flex items-center gap-2.5">
                <div className="grid h-[20px] place-content-center rounded bg-mainLightHover px-[6px] py-[1px] text-[12px] font-semibold text-main">
                  <span className="h-full font-semibold first-letter:uppercase">
                    {activity.city}
                  </span>
                </div>

                <p className="line-clamp-1 w-[70%] overflow-hidden text-[14px] font-normal leading-[24px] text-secondDark outline-none">
                  {activity.location}
                </p>
              </div>
              <div className="flexCenter gap-[6px] text-main">
                <span className="text-12xxl text-main">City</span>
              </div>
            </div>
            <div className="space-y-[6px]">
              <div className="flexBetween h-[30px] w-full gap-2 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[12px] leading-[24px] text-secondDark">
                <p className="h-full w-full bg-transparent text-14sm caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none tablet:text-14sm">
                  {activity.seat}
                </p>
                <MdChair className="text-[18px]" />
              </div>
            </div>

            <div className="space-y-[6px]">
              <div className="flexBetween h-[30px] w-full gap-2 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[12px] leading-[24px] text-secondDark">
                <p className="h-full w-full bg-transparent text-14sm caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none tablet:text-14sm">
                  {activity.price}
                </p>
                <AiFillDollarCircle className="text-[18px]" />
              </div>
            </div>
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

        <Button disabled={loading}>
          Edit
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </Button>
      </div>
    </form>
  );
}
