import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import SelectTag from "../activities/add/SelectTag";
import { Category } from "@/libs/types";

type AddWrapperProps = {
  categoryError: string;
  TagsError: string;
  addCategory: (id: string) => void;
  addTag: (tags: string) => void;
};

export default function AddWrapper({
  categoryError,
  TagsError,
  addCategory,
  addTag,
}: AddWrapperProps) {
  const [selected, setSelected] = useState<Category | null>(null);

  const handleCategory = (category: Category) => {
    addCategory(category.categoryId);
    setSelected(category);
  };

  return (
    <>
      <SelectCategory
        error={categoryError as string}
        addCategory={handleCategory}
        selected={selected}
      />
      <SelectTag
        addTag={addTag}
        error={TagsError as string}
        userCategory={selected?.categoryId || "67b654b90614d66231800307"}
      />
    </>
  );
}
