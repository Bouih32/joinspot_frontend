"use client";

import { useContext } from "react";

import { nanoid } from "nanoid";
import Image from "next/image";

import { PostT } from "@/libs/types";
import { PostContext } from "@/contexts/PostsContext";
import PostCard from "./PostCard";

export default function SavePosts({
  activities,
  userId,
  likes,
  role,
}: {
  activities: PostT[] | null;
  userId: string | undefined;
  likes: string[];
  role: string | undefined;
}) {
  const context = useContext(PostContext);

  if (!context) return null;

  const { data } = context;

  // Filter activities based on saved data
  const activitiesSaved = activities?.filter((ele) =>
    data.includes(ele.postId),
  );

  return (
    <>
      {activitiesSaved && activitiesSaved.length > 0 ? (
        activitiesSaved.map((ele) => (
          <PostCard
            key={nanoid()}
            data={ele}
            token={userId}
            likes={likes}
            role={role}
          />
        ))
      ) : (
        <section className="space-y-5 self-center justify-self-center text-center tablet:mt-10">
          <Image
            src="https://i.postimg.cc/R0mynP6K/empty.png"
            alt="empty"
            height={327}
            width={517}
            className="h-[207px] w-[327px] object-contain tablet:h-[327px] tablet:w-[517px]"
          />

          <div className="">
            <h1 className="text-16xxl text-main">No saved activities</h1>
            <p className="text-14xxl text-secondActive">
              No saved activities found. To save an activity, look for the
              'save' icon on activity card.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
