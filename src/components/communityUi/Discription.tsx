"use client";

import { cn } from "@/libs/utils";
import { useEffect, useRef, useState } from "react";

export default function Description({ content }: { content: string }) {
  const [more, setMore] = useState(false);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (paragraph) {
      const lineHeight = parseFloat(
        getComputedStyle(paragraph).lineHeight || "0",
      );
      const maxHeight = lineHeight * 3; // height of 3 lines
      if (paragraph.scrollHeight > maxHeight) {
        setShowSeeMore(true);
      }
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <p
        ref={paragraphRef}
        className={cn(
          "text-wrap text-12sm text-darker laptop:text-14sm",
          !more && "line-clamp-3 overflow-hidden text-ellipsis",
        )}
      >
        {content}
      </p>

      {showSeeMore && (
        <span
          className="cursor-pointer text-12sm text-main laptop:text-14sm"
          onClick={() => setMore((prev) => !prev)}
        >
          {more ? "See Less" : "See more"}
        </span>
      )}
    </div>
  );
}
