import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";
import PostCard from "./PostCard";
import { getLikedPosts, getPosts } from "@/actions/postServer";
import PostFeedBack from "./PostFeedback";
import { PostT } from "@/libs/types";
import { nanoid } from "nanoid";

export default async function PostsWrapper({
  params,
}: {
  params: {
    category: string;
    my: string;
    search: string;
    page: string;
  };
}) {
  const token = await getToken();
  let role: string | undefined;
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
    userId = (token as JwtPayload).userId;
  }

  const data = (await getPosts(params)) as PostT[];

  const likes = await getLikedPosts();

  return (
    <section className="flex w-full flex-col justify-between overflow-hidden">
      <div className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
        <PostFeedBack />
        {data.map((ele) => (
          <PostCard key={nanoid()} data={ele} token={userId} likes={likes} />
        ))}
      </div>
      {/* {data && data.length > 0 && params.my !== "save" && (
     <Pagination
       pages={activitiesData.pages}
       page={params.page ? parseInt(params.page) : undefined}
     />
   )} */}
    </section>
  );
}
