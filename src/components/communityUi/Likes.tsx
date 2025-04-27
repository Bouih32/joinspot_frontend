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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLike = async () => {
    setLike((prev) => !prev);
    setLoading(true);
    await likePost(postId);

    setLoading(true);
    router.refresh();
  };
  return (
    <div className="flex items-center gap-[6px]">
      <div onClick={handleLike} className="cursor-pointer">
        <button disabled={loading}>
          {like ? <FaHeart className="text-main" /> : <FaRegHeart />}
        </button>
      </div>

      <p>{likes} Likes</p>
    </div>
  );
}
