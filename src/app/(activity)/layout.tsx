import Header from "@/components/header/Header";
import SaveContext from "@/contexts/SaveContext";

import { ReactNode } from "react";

export default function ActivityLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <SaveContext>
        <Header />
        {children}
      </SaveContext>
    </main>
  );
}
