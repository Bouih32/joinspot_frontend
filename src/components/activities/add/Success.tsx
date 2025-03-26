"use client";

import { SaveContext } from "@/contexts/SaveContext";
import { useContext } from "react";

export default function Success({ review }: { review?: boolean }) {
  const context = useContext(SaveContext);
  if (!context) return;
  const { success } = context;
  return success ? (
    <div className="w-full rounded border border-success bg-successHover py-1 text-center text-10xxl text-success tablet:text-12xxl">
      <p>
        {review
          ? "Thank you for your review! It helps others discover great experiences."
          : "Your activity has been successfully posted."}
      </p>
    </div>
  ) : null;
}
