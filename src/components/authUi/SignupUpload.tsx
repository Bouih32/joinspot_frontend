import { SignupContext } from "@/contexts/SignupContext";
import { cn, getContext } from "@/libs/utils";
import { ChangeEvent, useRef, useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  setValue: (name: Path<T>, value: string) => void;
  valid?: boolean;
  error: string | undefined;
  disabled?: boolean;
  placeholder: string;
  targetName: string;
  name: Path<T>;
};

export default function SignupUpload<T extends FieldValues>({
  valid,
  error,
  disabled,
  placeholder,
  targetName,
  name,
  setValue,
  register,
}: InputProps<T>) {
  const [target, setTarget] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const uploadRef = useRef<HTMLInputElement>(null);
  const { data } = getContext(SignupContext);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (!file) return;
    setTarget(file.name);
    setValue(targetName as Path<T>, file.name);

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
        setValue(name, result.secure_url);
        console.log("Image URL:", result.secure_url);
        setLoading(false);
      } else {
        console.error("Upload failed:", result);
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };
  return (
    <div className="space-y-[3px]">
      <div
        className={cn(
          "flexBetween w-full gap-3 rounded border border-neutral px-2 py-[3px] font-openSans text-16sm text-darker tablet:px-3 tablet:py-[6px] xl:py-3.5",
          valid && "border-success text-darker",
          error && "border-error text-error",
          disabled && "bg-neutralLight",
        )}
      >
        <input
          {...register(name)}
          disabled={disabled}
          placeholder={placeholder}
          ref={uploadRef}
          onChange={handleImageUpload}
          type="file"
          className={cn(
            "sr-only h-full w-full bg-transparent text-12sm caret-main outline-none placeholder:text-neutralHover disabled:pointer-events-none tablet:text-14sm",
            error && "placeholder:text-error",
          )}
        />
        <p className="text-12sm tablet:text-14sm">
          {target || (data as Record<string, any>)[targetName] || placeholder}
        </p>
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          <BiImageAdd
            className="cursor-pointer hover:text-main"
            onClick={() => {
              uploadRef.current?.click();
            }}
          />
        )}
      </div>
      {error && (
        <p className="text-start font-openSans text-10sm text-error">{error}</p>
      )}
    </div>
  );
}
