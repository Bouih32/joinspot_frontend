"use client";

import { useState } from "react";
import MobileFilter from "./MobileFilter";
import MobileSearch from "./MobileSearch";

export default function MobileUpperHeader() {
  const [search, setSearch] = useState(false);
  return (
    <section className="flex w-full items-center justify-between tablet:hidden">
      {/* <MobileFilter /> */}
      <MobileSearch />
    </section>
  );
}
