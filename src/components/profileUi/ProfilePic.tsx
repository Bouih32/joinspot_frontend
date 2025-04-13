"use client";

import { ChangeEvent, useRef, useState } from "react";
import { AiFillEdit, AiOutlineLoading3Quarters } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { updateProfilePic } from "@/actions/getActivities";
import { avatarPlaceholder } from "@/libs/constantes";

type ProfilePicProps = {
  avatar: string | null;
};

export default function ProfilePic({ avatar }: ProfilePicProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const pathName = usePathname();

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "",
    );

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (result.secure_url) {
        setImageUrl(result.secure_url);
        await updateProfilePic({ avatar: result.secure_url });
        setLoading(false);
      } else {
        console.error("Upload failed:", result); // Handle errors
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${imageUrl ? imageUrl : avatar ? avatar : avatarPlaceholder})`,
        }}
        className="flexCenter h-[70px] w-[70px] overflow-hidden rounded-[16px] border-[2px] border-x-secondLightActive bg-cover bg-center bg-no-repeat tablet:h-[130px] tablet:w-[130px] tablet:rounded-[18px] tablet:border-[4px] laptop:h-[142px] laptop:w-[142px]"
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin text-[24px]" />
        ) : null}
        {pathName === "/user/settings" && (
          <div
            className="absolute right-0 top-0 grid h-[28px] w-[28px] translate-x-[50%] cursor-pointer place-content-center rounded-full bg-main text-white"
            onClick={() => uploadRef.current?.click()}
          >
            <AiFillEdit />
          </div>
        )}
      </div>
      <input
        type="file"
        ref={uploadRef}
        onChange={handleImageUpload}
        className="sr-only"
      />
    </div>
  );
}
