"use client";

import { PostContext } from "@/contexts/PostsContext";
import { useContext, useEffect, useState } from "react";
import { MdBookmark, MdOutlineTurnedInNot } from "react-icons/md";

export default function Save({ id }: { id: string }) {
  const context = useContext(PostContext);
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
      className="cursor-pointer text-[24px] text-main"
      onClick={(e) => {
        handleClick();
      }}
    >
      {open ? <MdBookmark /> : <MdOutlineTurnedInNot />}
    </div>
  );
}
