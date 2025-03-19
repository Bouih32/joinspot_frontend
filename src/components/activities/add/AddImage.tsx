"use client";

import { cn } from "@/libs/utils";
import { ChangeEvent, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";

type AddImageProps = {
  addCover: (cover: string) => void;
  error: string;
};

export default function AddImage({ addCover, error }: AddImageProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

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
        console.log("Image URL:", result.secure_url);
        addCover(result.secure_url);
        setLoading(false);
        setDone(true);
      } else {
        console.error("Upload failed:", result); // Handle errors
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };
  return (
    <div
      className="flex cursor-pointer flex-col items-start gap-2 laptop:items-center"
      onClick={() => uploadRef.current?.click()}
    >
      <div
        className={cn(
          "flexCenter h-[130px] w-[239px] flex-col rounded-[8px] bg-[#F8F8F8] bg-cover bg-center bg-no-repeat text-center text-10xl text-secondDark tablet:h-[200px] tablet:w-[280px] laptop:h-[235px] laptop:w-[384px]",
          error && "border border-error",
        )}
        style={{
          backgroundImage: `url(${imageUrl ? imageUrl : null})`,
        }}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin text-[24px]" />
        ) : null}
        {!loading && !done && (
          <>
            <BiImageAdd className="text-[24px]" />
            <p>
              Add activity <br /> image
            </p>
          </>
        )}
      </div>
      <div className="flexCenter gap-[5px] text-[10px] font-semibold text-neutralDarkHover">
        <MdOutlineStar className="text-neutralActive" />
        <p>
          Recommended size is :
          <span className="font-bold text-main">550 x 350 px</span>
        </p>
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
