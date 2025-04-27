import { likePost } from "@/actions/postActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type LikesProps = {
  likes: number;
  postId: string;
  likesIds: string[];
};

export default function Likes({ likes, postId, likesIds }: LikesProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLike = async () => {
    setLoading(true);
    await likePost(postId);

    setLoading(true);
    router.refresh();
  };
  return (
    <div className="flex items-center gap-[6px]">
      <div onClick={handleLike} className="cursor-pointer">
        <button disabled={loading}>
          {likesIds.includes(postId) ? (
            <FaHeart className="text-main" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      <p>{likes} Likes</p>
    </div>
  );
}
