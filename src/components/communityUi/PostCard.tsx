"use client";

import { useState } from "react";
import ShareActivity from "../activities/ShareActivity";
import CommentCard from "./CommentCard";
import Discription from "./Discription";
import PostActions from "./PostActions";
import CommentForm from "./CommentForm";
import { PostT } from "@/libs/types";
import { nanoid } from "nanoid";
import UserInfo from "./UserInfo";

export default function PostCard({
  data,
  token,
}: {
  data: PostT;
  token: string | undefined;
}) {
  const [show, setShow] = useState(false);

  const handleComment = () => {
    setShow((prev) => !prev);
  };

  return (
    <section className="w-full space-y-4 rounded-xl border border-neutralLightActive p-3 laptop:p-4">
      <div className="flex items-start justify-between">
        <UserInfo
          user={data.user}
          token={token}
          category={data.category.categoryName}
        />
        <ShareActivity activityId="hello" />
      </div>
      <div
        className="h-[248px] rounded-[8px] bg-cover bg-center bg-no-repeat p-3"
        style={{ backgroundImage: `url(${data.bannerPic})` }}
      >
        <div className="flex items-center gap-1 tablet:gap-[6px] laptop:gap-3">
          {data.postTags.map((ele) => (
            <div
              key={nanoid()}
              className="flexCenter h-[22px] w-fit rounded-[20px] bg-second px-2.5 tablet:h-[30px] tablet:px-3"
            >
              <p className="text-center text-14sm text-white first-letter:uppercase">
                {ele.tag.tagName}
              </p>
            </div>
          ))}
        </div>
      </div>
      <PostActions show={show} handleComment={handleComment} data={data} />
      {show && (
        <section className="space-y-[14px]">
          <CommentForm postId={data.postId} />
          <div className="divide-y divide-neutralLightHover">
            {data.comment.map((ele) => (
              <CommentCard key={nanoid()} comment={ele} token={token} />
            ))}
          </div>
        </section>
      )}
      <Discription content={data.description} />
    </section>
  );
}
