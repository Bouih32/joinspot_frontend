"use client";

import TextArea from "@/components/TextArea";
import { addValidation, postValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/components/Button";

import { MdChair } from "react-icons/md";
import { AiFillDollarCircle, AiOutlineLoading3Quarters } from "react-icons/ai";

import Link from "next/link";
import { addActivity } from "@/actions/activityActions";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SaveContext } from "@/contexts/SaveContext";
import AddImage from "../activities/add/AddImage";
import AddInput from "../activities/add/AddInput";
import SelectTag from "../activities/add/SelectTag";
import SelectCategory from "./SelectCategory";
import { Category } from "@/libs/types";
import AddWrapper from "./AddWrapper";

type addType = z.infer<typeof postValidation>;
export default function PostForm({ userCategory }: { userCategory: string }) {
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
  } = useForm<addType>({
    resolver: zodResolver(postValidation),
  });

  const addTag = (tags: string) => {
    setValue("tags", tags);
  };

  const addCategory = (id: string) => {
    setValue("category", id);
  };

  const addCover = (cover: string) => {
    setValue("coverPic", cover);
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    console.log(formData);
    setLoading(true);
    // await addActivity(formData);
    setLoading(false);
    handleSuccess();
    // router.push("/activities");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex w-full flex-col gap-[21px] tablet:gap-5"
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
      <div className="flex w-full flex-col items-center justify-between gap-5 tablet:flex-row tablet:items-start tablet:gap-10">
        <AddImage
          addCover={addCover}
          error={errors.coverPic?.message as string}
        />

        <div className="w-full space-y-[7px] tablet:space-y-[8px]">
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
          <AddWrapper
            categoryError={errors.category?.message as string}
            TagsError={errors.tags?.message as string}
            addCategory={addCategory}
            addTag={addTag}
          />
        </div>
      </div>
      <div className="flex gap-2 self-end">
        <Link
          href="/activities"
          className="flexCenter w-fit cursor-pointer gap-2 rounded border border-main bg-transparent px-3 py-[3px] font-openSans text-14xl text-main outline-none tablet:px-4 tablet:py-[6px]"
        >
          Cancel
        </Link>

        <Button disabled={loading}>
          Post
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </Button>
      </div>
    </form>
  );
}
