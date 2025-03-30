"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { GoPlus } from "react-icons/go";
import { TbTriangleFilled } from "react-icons/tb";
import TagCard from "./TagCard";
import CategoryCard from "./CategoryCard";
import { getAllTags, getCategories, TagsT } from "@/actions/getCategory";
import { Category } from "@/libs/types";
import { nanoid } from "nanoid";
import Chip from "../Chip";

export default function AddTags() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<TagsT[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const selectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  const selectTags = (id: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(id)
        ? prevTags.filter((ele) => ele !== id) // Remove if already selected
        : prevTags.length < 3
          ? [...prevTags, id]
          : prevTags,
    );
  };

  useEffect(() => {
    if (open) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      const tags = await getAllTags();
      setCategories(data.categories);
      setTags(tags);
    };
    fetchCategories();
  }, []);

  return (
    <div className="">
      <div
        onClick={() => setOpen(true)}
        className="flexCenter mt-2 w-fit cursor-pointer gap-2 rounded-[20px] border border-main px-3 py-[3px] font-openSans text-14sm text-main tablet:px-4 tablet:py-[6px]"
      >
        <p>Add Tag</p>
        <CgMathPlus />
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[800] grid cursor-pointer place-content-center bg-white/50"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="tablet:text-14lsm flex w-[328px] flex-col justify-between gap-[30px] rounded-[8px] bg-secondLight px-2.5 py-5 text-12sm shadow-8xl tablet:w-[676px] tablet:rounded-xl tablet:px-[14px] laptop:gap-[50px] laptop:text-16sm"
          >
            <h3 className="text-16xl text-main tablet:text-28xl laptop:text-40xl">
              Tags
            </h3>
            <div className="space-y-[9px]">
              <p className="text-neutralDark">Choose your tags by category.</p>
              <div className="flexBetween rounded bg-neutralLightHover px-1 py-[6px] tablet:rounded-xl tablet:px-3 laptop:py-[11px]">
                {selectedTags.length > 0 ? (
                  <div className="flex items-center gap-1">
                    {tags
                      .filter((ele) => selectedTags.includes(ele.tagId))
                      .map((ele) => (
                        <Chip key={nanoid()}>{ele.tagName}</Chip>
                      ))}
                  </div>
                ) : (
                  <p className="text-12sm text-neutralHover">No tag yet</p>
                )}

                <div className="">
                  <Button icon={<TbTriangleFilled className="rotate-180" />}>
                    Add tags
                  </Button>
                </div>
              </div>
            </div>

            <section className="flex w-full items-start justify-center rounded-xl border border-neutralLightActive tablet:gap-2.5 tablet:border-0">
              <div className="f h-full border-r border-neutralLightActive p-3 tablet:flex-1 tablet:rounded-xl tablet:border">
                <p className="pb-1 text-14xxl text-main tablet:text-16xxl">
                  Categories
                </p>
                {categories?.map((ele) => (
                  <CategoryCard
                    key={nanoid()}
                    categoryName={ele.categoryName}
                    categoryId={ele.categoryId}
                    selectCategory={selectCategory}
                  />
                ))}
              </div>
              <div className="flex-1 rounded-xl border-neutralLightActive p-3 tablet:border">
                <p className="pb-1 text-14xxl text-main tablet:text-16xxl">
                  Tags
                </p>

                {tags
                  ?.filter((ele) => ele.categoryId === selectedCategory)
                  .map((ele) => (
                    <TagCard
                      key={nanoid()}
                      tagName={ele.tagName}
                      tagId={ele.tagId}
                      selectTags={selectTags}
                    />
                  ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
