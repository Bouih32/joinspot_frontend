"use client";

import { createContext, ReactNode, useState } from "react";

type NavContextType = {
  open: "notifications" | "messages" | "profile" | "nav" | null;
  handleOpen?: (ele: "notifications" | "messages" | "profile" | "nav") => void;
  handleClose?: () => void;
};

export const NavContext = createContext<NavContextType | null>(null);

export default function NavigationContext({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState<
    "notifications" | "messages" | "profile" | "nav" | null
  >(null);

  const handleOpen = (
    ele: "notifications" | "messages" | "profile" | "nav",
  ) => {
    setOpen(null);
    open === ele ? setOpen(null) : setOpen(ele);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <NavContext.Provider value={{ open, handleClose, handleOpen }}>
      {children}
    </NavContext.Provider>
  );
}
