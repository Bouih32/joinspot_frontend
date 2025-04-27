"use client";

import Comments from "./Comments";
import Likes from "./Likes";
import Save from "./Save";
import { PostT } from "@/libs/types";

type PostActionsProps = {
  handleComment: () => void;
  show: boolean;
  data: PostT;
  postId: string;
  likes: string[];
};

export default function PostActions({
  handleComment,
  show,
  data,
  postId,
  likes,
}: PostActionsProps) {
  return (
    <div className="flexBetween text-12xxl text-neutral laptop:text-14xxl">
      <div className="flex items-center gap-[14px]">
        <Likes likes={data.likesCount} postId={postId} likesIds={likes} />
        <Comments
          show={show}
          handleComment={handleComment}
          commentsCount={data._count.comment}
        />
      </div>
      <Save id={postId} />
    </div>
  );
}
