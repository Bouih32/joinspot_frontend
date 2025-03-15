"use client";

import { SaveContext } from "@/contexts/SaveContext";
import { useContext, useEffect, useState } from "react";
import { MdBookmark, MdOutlineTurnedInNot } from "react-icons/md";

export default function Save({ id }: { id: string }) {
  const context = useContext(SaveContext);
  if (!context) return null; // Return `null` instead of `undefined` to avoid hydration errors

  const { handleSave, data } = context;
  const [open, setOpen] = useState(data.includes(id));

  useEffect(() => {
    setOpen(data.includes(id));
  }, [data, id]); // Ensure `open` updates when `data` changes

  const handleClick = () => {
    setOpen((prev) => !prev);
    handleSave(id);
  };

  return (
    <div
      className="z-40 w-fit cursor-pointer rounded-md bg-white p-[5px] text-main"
      onClick={handleClick}
    >
      {open ? <MdBookmark /> : <MdOutlineTurnedInNot />}
    </div>
  );
}
