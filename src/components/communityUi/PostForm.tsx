"use client";

import TextArea from "@/components/TextArea";
import { postValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/components/Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SaveContext } from "@/contexts/SaveContext";
import AddImage from "../activities/add/AddImage";
import AddInput from "../activities/add/AddInput";
import AddWrapper from "./AddWrapper";
import { addPost } from "@/actions/postActions";

export type addPostT = z.infer<typeof postValidation>;
export default function PostForm() {
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
  } = useForm<addPostT>({
    resolver: zodResolver(postValidation),
  });

  const addTag = (tags: string) => {
    setValue("tags", tags);
  };

  const addCategory = (id: string) => {
    setValue("categoryId", id);
  };

  const addCover = (cover: string) => {
    setValue("bannerPic", cover);
  };

  const handleSubmit = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();
    console.log(formData);
    setLoading(true);
    await addPost(formData);
    setLoading(false);
    handleSuccess();
    router.push("/community");
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
          error={errors.bannerPic?.message as string}
        />

        <div className="w-full space-y-[7px] tablet:space-y-[8px]">
          <AddInput<addPostT>
            placeholder="Activity title"
            register={register}
            name="title"
            type="text"
            error={errors.title?.message as string}
          />
          <TextArea<addPostT>
            placeholder="Description"
            register={register}
            name="description"
            error={errors.description?.message as string}
          />
          <AddWrapper
            categoryError={errors.categoryId?.message as string}
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
