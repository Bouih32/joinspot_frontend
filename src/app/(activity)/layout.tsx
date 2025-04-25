import Header from "@/components/header/Header";

import { ReactNode } from "react";

export default function ActivityLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
