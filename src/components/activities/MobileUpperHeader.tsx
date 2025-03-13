"use client";

import { useState } from "react";
import MobileFilter from "./MobileFilter";
import MobileSearch from "./MobileSearch";
import { Category } from "@/libs/types";

export type HeaderProps = {
  categories: Category[];
};

export default function MobileUpperHeader({ categories }: HeaderProps) {
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(true);
  };

  const handleClose = () => {
    setSearch(false);
  };
  return (
    <section className="flex w-full items-center justify-between tablet:hidden">
      {!search && <MobileFilter categories={categories} />}
      <MobileSearch handleSearch={handleSearch} handleClose={handleClose} />
    </section>
  );
}
