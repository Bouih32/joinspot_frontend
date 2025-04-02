"use client";

import {
  updatePassword,
  updateSocials,
  updateUserData,
} from "@/actions/getActivities";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { resetPswrd, socialsValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaFacebook, FaLink, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { z } from "zod";

export type socialsT = z.infer<typeof socialsValidation>;

export default function SocialsForm({
  socials,
}: {
  socials: {
    socialId: string;
    link: string;
    platform: string;
    userId: string;
  }[];
}) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<socialsT>({
    resolver: zodResolver(socialsValidation),
    defaultValues: {
      facebook: socials?.filter((ele) => ele.platform === "FACEBOOK")[0]?.link,
      instagram: socials?.filter((ele) => ele.platform === "INSTAGRAM")[0]
        ?.link,
      youtube: socials?.filter((ele) => ele.platform === "YOUTUBE")[0]?.link,
      website: socials?.filter((ele) => ele.platform === "WEBSITE")[0]?.link,
    },
  });

  const handleChange = async () => {
    const resault = await trigger();
    if (!resault) return;
    const formData = getValues();

    const data = [
      { platform: "FACEBOOK", link: formData.facebook },
      { platform: "INSTAGRAM", link: formData.instagram },
      { platform: "YOUTUBE", link: formData.youtube },
      { platform: "WEBSITE", link: formData.website },
    ];

    setLoading(true);
    await updateSocials(data);

    setLoading(false);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleChange();
      }}
      className="flex w-full flex-col space-y-[22px]"
    >
      <p className="w-full border-b border-neutralLightHover pb-3 text-12xl text-neutralDarkActive tablet:text-14xl laptop:text-16xl">
        Your Social links
      </p>
      <section className="grid w-full gap-4 tablet:grid-cols-2 tablet:flex-row">
        <div className="w-full space-y-[2px]">
          <div className="flex items-center gap-2.5 text-12xxl tablet:text-14xxl">
            <FaFacebook />
            <p>Facebook</p>
          </div>
          <Input<socialsT>
            placeholder="Facebook link"
            register={register}
            name="facebook"
            type="text"
            error={errors.facebook?.message as string}
          />
        </div>
        <div className="w-full space-y-[2px]">
          <div className="flex items-center gap-2.5 text-12xxl tablet:text-14xxl">
            <RiInstagramFill />
            <p>Instagram</p>
          </div>
          <Input<socialsT>
            placeholder="Instagram link "
            register={register}
            name="instagram"
            type="text"
            error={errors.instagram?.message as string}
          />
        </div>

        <div className="w-full space-y-[2px]">
          <div className="flex items-center gap-2.5 text-12xxl tablet:text-14xxl">
            <FaYoutube />
            <p>Youtube</p>
          </div>
          <Input<socialsT>
            placeholder="New password"
            register={register}
            name="youtube"
            type="text"
            error={errors.youtube?.message as string}
          />
        </div>
        <div className="w-full space-y-[2px]">
          <div className="flex items-center gap-2.5 text-12xxl tablet:text-14xxl">
            <FaLink />
            <p>Website</p>
          </div>
          <Input<socialsT>
            placeholder="Website link"
            register={register}
            name="website"
            type="text"
            error={errors.website?.message as string}
          />
        </div>
      </section>
      <div className="tablet:self-end">
        <Button>
          Change
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </Button>
      </div>
    </form>
  );
}
