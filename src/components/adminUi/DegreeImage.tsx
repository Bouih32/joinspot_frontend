"use client";

import Image from "next/image";
import Button from "../Button";
import { BiSolidCloudDownload } from "react-icons/bi";
type DegreeImageProps = {
  linkPath: string;
  title: string;
};

export default function DegreeImage({ linkPath, title }: DegreeImageProps) {
  const handleDownload = async () => {
    const response = await fetch(linkPath);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      onClick={handleDownload}
      className="flex w-full flex-col items-center space-y-[6px] text-center tablet:w-fit"
    >
      <div className="group relative h-[92px] w-full tablet:w-[204px] laptop:w-[157px]">
        <Button classname="bg-white absolute top-2 right-2 tablet:hidden text-neutralDarkActive px-[6px] tablet:px-[6px] py-1 tablet:py-1 text-10lg">
          <BiSolidCloudDownload className="text-[16px]" />
          Download
        </Button>
        <Image
          src={linkPath}
          alt="verification image"
          height={92}
          width={204}
          className="h-full w-full rounded-[6px] object-cover"
        />
        <div className="absolute inset-0 hidden cursor-pointer place-content-center rounded-[6px] bg-[#00000091] tablet:group-hover:grid">
          <Button classname="bg-white text-neutralDarkActive px-[6px] tablet:px-[6px] py-1 tablet:py-1 text-10lg">
            <BiSolidCloudDownload className="text-[16px]" />
            Download
          </Button>
        </div>
      </div>

      <p className="text-10sm text-neutralActive">{title}</p>
    </div>
  );
}
