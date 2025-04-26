import { useState } from "react";
import { MdModeComment, MdOutlineModeComment } from "react-icons/md";

export default function Comments() {
  const [show, setShow] = useState(false);

  const handleComment = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-[6px]">
      <div onClick={handleComment} className="cursor-pointer">
        {show ? (
          <MdModeComment className="text-main" />
        ) : (
          <MdOutlineModeComment />
        )}
      </div>

      <p>1K Likes</p>
    </div>
  );
}
