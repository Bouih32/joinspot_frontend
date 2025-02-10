import Header from "@/components/header/Header";
import React, { ReactNode } from "react";

export default async function MainPageLayoute({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
      <Header user />
      {children}
    </main>
  );
}
