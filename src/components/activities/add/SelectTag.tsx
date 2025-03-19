"use client";

import { getTagsById } from "@/actions/getCategory";
import { cn } from "@/libs/utils";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { CgAdd } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type SelectTagProps = {
  addTag: (tag: string) => void;
  error: string;
  userCategory: string;
};

type TagsT = { tagName: string; tagId: string };

export default function SelectTag({
  addTag,
  error,
  userCategory,
}: SelectTagProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<TagsT[]>([]);
  const [tags, setTags] = useState<TagsT[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getTagsById(userCategory);
      if (Array.isArray(data)) {
        setTags(data); // Ensure data is an array before setting the state
      }
    };
    getData();
  }, []);

  const handleTag = (tag: TagsT) => {
    const exists = selected?.some((ele) => ele.tagName === tag.tagName);

    const data = exists
      ? selected.filter((ele) => ele.tagName !== tag.tagName) // Remove if already present
      : selected.length < 3
        ? [...selected, tag] // Add if under limit
        : selected; // Keep the same if limit is reached

    return data;
  };

  const handleAdd = (tag: TagsT) => {
    setSelected(handleTag(tag));
    setOpen(false);
  };

  return (
    <div className="relative space-y-1">
      <div
        className={cn(
          "flexBetween h-[30px] w-full cursor-pointer gap-3 rounded border border-secondLightActive px-2 py-[3px] font-openSans text-[14px] leading-[24px] text-secondDark",
          selected.length > 0 && "font-semibold text-main",
          error && "border-error",
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p>
          {selected.length > 0
            ? selected.map((ele) => ele.tagName).join(" - ")
            : "Select tags"}
        </p>
        {open ? (
          <IoIosArrowUp className="hover:text-main" />
        ) : (
          <IoIosArrowDown className="hover:text-main" />
        )}
      </div>
      {open && (
        <>
          <div
            className="fixed inset-0 cursor-pointer bg-transparent"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute left-0 top-[120%] z-50 w-full space-y-[5px] rounded bg-white p-[6px] shadow-22xl">
            {tags.map((ele) => (
              <div
                onClick={() => {
                  handleAdd(ele);
                  addTag(
                    handleTag(ele)
                      .map((ele) => ele.tagId)
                      .join("-"),
                  );
                }}
                key={nanoid()}
                className={cn(
                  "flex cursor-pointer items-center gap-[9px] rounded-[2px] p-[9px] text-center text-14lg text-neutralHover hover:bg-[#F8F8F8]",
                  selected.includes(ele) && "bg-[#F8F8F8]",
                )}
              >
                <CgAdd
                  className={cn(
                    "text-[20px]",
                    selected.includes(ele) && "rotate-45 text-main",
                  )}
                />
                <p className="first-letter:uppercase">{ele.tagName}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
