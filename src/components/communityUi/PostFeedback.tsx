"use client";

import { PostContext } from "@/contexts/PostsContext";
import { useContext } from "react";

export default function PostFeedBack() {
  const context = useContext(PostContext);
  if (!context) return;
  const { success } = context;
  return success ? (
    <div className="w-full rounded border border-success bg-successHover py-1 text-center text-10xxl text-success tablet:text-12xxl">
      <p>Your post has been successfully added.</p>
    </div>
  ) : null;
}
