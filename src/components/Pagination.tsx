"use client";

import { addParam, cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  pages: number;
  page: number | undefined;
};

export default function Pagination({ pages, page = 1 }: PaginationProps) {
  const params = useSearchParams();
  const router = useRouter();

  const handlePrev = () => {
    if (page > 1) addParam("page", (page - 1).toString(), params, router);
  };

  const handleNext = () => {
    if (page < pages) addParam("page", (page + 1).toString(), params, router);
  };

  let pageNumbers: (number | "...")[] = [];

  if (pages <= 5) {
    pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
  } else {
    pageNumbers = [1];

    if (page > 3) {
      pageNumbers.push("...");
    }

    if (page !== 1 && page !== pages && page !== pages - 1) {
      pageNumbers.push(page);
    }

    if (page < pages - 2) {
      pageNumbers.push("...");
    }

    pageNumbers.push(pages - 1, pages);
  }

  console.log(pages);

  return (
    <section
      className={cn(
        "flexCenter gap-1 self-end text-12xxl text-darker tablet:text-16xxl",
        pages <= 1 && "hidden",
      )}
    >
      <MdKeyboardArrowLeft
        className="cursor-pointer text-[20px] text-neutral hover:text-neutralActive tablet:text-[24px]"
        onClick={handlePrev}
      />

      {pageNumbers.map((num) =>
        num === "..." ? (
          <div key={nanoid()} className="px-2">
            ...
          </div>
        ) : (
          <div
            key={nanoid()}
            className={cn(
              "grid h-[30px] w-[30px] cursor-pointer place-content-center rounded-full border-main hover:border hover:text-main tablet:h-10 tablet:w-10",
              num === page && "border text-main",
            )}
            onClick={() => addParam("page", num.toString(), params, router)}
          >
            {num}
          </div>
        ),
      )}

      <MdKeyboardArrowRight
        className="cursor-pointer text-[20px] text-neutral hover:text-neutralActive tablet:text-[24px]"
        onClick={handleNext}
      />
    </section>
  );
}
