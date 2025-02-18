"use client";

import React, {
  useState,
  ChangeEvent,
  useRef,
  InputHTMLAttributes,
} from "react";
import { BiImageAdd } from "react-icons/bi";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");

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
        console.log("Image URL:", result.secure_url); // Log the URL
        // Now you can store this imageUrl in your database
      } else {
        console.error("Upload failed:", result); // Handle errors
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div>
      <BiImageAdd
        className="cursor-pointer hover:text-main"
        onClick={() => {
          uploadRef.current?.click();
        }}
      />
      <input
        type="file"
        ref={uploadRef}
        onChange={handleImageUpload}
        className="sr-only"
      />
    </div>
  );
};

export default ImageUpload;
