"use client";

import Button from "@/components/Button";
import Check from "@/components/Check";
import Input from "@/components/Input";
import Select from "@/components/select/SelectCategories";
import { SignupContext } from "@/contexts/SignupContext";
import { getContext } from "@/libs/utils";
import { secondStepValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import { z } from "zod";
import GoBack from "./GoBack";
import { Category } from "@/libs/types";
import SignupUpload from "../SignupUpload";

export default function SecondStep() {
  const [proveBy, setProveBy] = useState<"degree" | "business" | "">("");
  const { setStep, goBack, data, handleData } = getContext(SignupContext);
  const [selected, setSelected] = useState<string | null>(
    data?.categoryName ?? null,
  );

  const validationSchema = useMemo(() => {
    return secondStepValidation(proveBy);
  }, [proveBy]);

  const handleClick = (ele: Category) => {
    setValue("categoryId", ele.categoryId);
    setValue("categoryName", ele.categoryName);
    setSelected(ele.categoryName);
  };

  type FormValues = z.infer<typeof validationSchema>;
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      degreeName: data?.degreeName,
      schoolName: data?.schoolName,
      categoryId: data?.categoryName ? data?.categoryName : "",
      year: data?.year,
      frontPic: data?.frontPic,
      justification: data?.justification,
      justificationPic: data?.justificationPic,
    },
  });

  const handleProveBy = (prove: "" | "degree" | "business") => {
    setProveBy(prove);
    setValue("proveBy", prove);
  };

  const handleSubmit = async () => {
    const resault = await trigger();

    console.log(errors);
    if (!resault) return;
    const formData = getValues();
    console.log(formData);
    handleData(formData);

    setStep(3);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flexCenter flex-col gap-[28px] text-12sm text-secondActive tablet:w-[440px] tablet:text-center laptop:w-[412px]"
    >
      <GoBack goBack={goBack} />
      <div className="w-full space-y-3 tablet:space-y-[18px]">
        <div className="space-y-2 tablet:space-y-[6px]">
          <p className="text-start text-12sm text-darker">
            Your activities category <span className="text-main">*</span>
          </p>
          <Select<FormValues>
            placeholder="Chose your category"
            register={register}
            name="categoryId"
            selected={selected}
            handleClick={handleClick}
            error={errors.categoryId?.message as string}
          />
        </div>

        <div className="tablet:flexBetween flex-col justify-items-start gap-3 tablet:flex-row">
          <Check
            id="degree"
            handleClick={() => handleProveBy("degree")}
            proveBy={proveBy}
          >
            prove by degree
          </Check>
          <Check
            id="business"
            handleClick={() => handleProveBy("business")}
            proveBy={proveBy}
          >
            prove by business
          </Check>
        </div>

        {proveBy === "degree" && (
          <>
            <div className="space-y-2 tablet:space-y-[6px]">
              <p className="text-start text-12sm text-darker">
                Certification or degree <span className="text-main">*</span>
              </p>
              <Input<FormValues>
                placeholder="Degree name"
                register={register}
                name="degreeName"
                type="text"
                error={errors.degreeName?.message as string}
              />
            </div>
            <div className="flex grid-cols-2 flex-col gap-2.5 tablet:grid tablet:gap-4">
              <Input<FormValues>
                placeholder="School name"
                register={register}
                name="schoolName"
                type="text"
                error={errors.schoolName?.message as string}
              />
              <Input<FormValues>
                placeholder="Year"
                register={register}
                name="year"
                type="text"
                error={errors.year?.message as string}
              />
            </div>

            <SignupUpload<FormValues>
              placeholder="Add certificate image"
              setValue={setValue}
              register={register}
              name="frontPic"
              targetName="frontPicName"
              error={errors.frontPic?.message as string}
            />
          </>
        )}
        {proveBy === "business" && (
          <>
            <div className="space-y-2 tablet:space-y-[6px]">
              <p className="text-start text-12sm text-darker">
                Business or company <span className="text-main">*</span>
              </p>
              <Input<FormValues>
                placeholder="About your business"
                register={register}
                name="justification"
                type="text"
                error={errors.justification?.message as string}
              />
            </div>
            <SignupUpload<FormValues>
              placeholder="Add a prove image"
              setValue={setValue}
              register={register}
              name="justificationPic"
              targetName="justnImgName"
              error={errors.justificationPic?.message as string}
            />
          </>
        )}
        <p className="text-start text-12sm text-secondActive">
          <span className="text-main">*</span> Necessary information
        </p>
      </div>

      <Button secondary icon disabled={proveBy === ""}>
        Next
      </Button>
    </form>
  );
}
