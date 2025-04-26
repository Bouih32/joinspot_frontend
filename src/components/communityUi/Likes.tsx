import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Likes() {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-[6px]">
      <div onClick={handleLike} className="cursor-pointer">
        {like ? <FaHeart className="text-main" /> : <FaRegHeart />}
      </div>

      <p>1K Likes</p>
    </div>
  );
}
