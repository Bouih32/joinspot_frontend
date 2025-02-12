import SignupContext from "@/contexts/SignupContext";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <SignupContext>{children}</SignupContext>;
}
