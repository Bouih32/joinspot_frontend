"use client";

import { cn } from "@/libs/utils";
import { useEffect, useRef, useState } from "react";

export default function Description() {
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
        Lorem ipsum dolor sit amet consectetur. Dui id elementum pellentesque
        dolor ut tempor sit. Nec urna donec sodales imperdiet sagittis.
        Scelerisque id at sagittis nulla. Odio ante lacus purus mattis ultrices
        in turpis. Lectus dictumst orci imperdiet aliquet at senectus volutpat
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
