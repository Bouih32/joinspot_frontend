import { likePost } from "@/actions/postActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type LikesProps = {
  likes: number;
  postId: string;
};

export default function Likes({ likes, postId }: LikesProps) {
  const [like, setLike] = useState(false);
  const router = useRouter();

  const handleLike = async () => {
    await likePost(postId);
    setLike((prev) => !prev);
    router.refresh();
  };
  return (
    <div className="flex items-center gap-[6px]">
      <div onClick={handleLike} className="cursor-pointer">
        {like ? <FaHeart className="text-main" /> : <FaRegHeart />}
      </div>

      <p>{likes} Likes</p>
    </div>
  );
}
