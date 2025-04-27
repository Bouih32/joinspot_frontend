import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";
import PostCard from "./PostCard";
import { getLikedPosts, getPosts } from "@/actions/postServer";
import PostFeedBack from "./PostFeedback";
import { PostT } from "@/libs/types";
import { nanoid } from "nanoid";
import Questions from "../sections/support/Questions";
import Noposts from "./Noposts";
import ClearAll from "../activities/mainFilters/ClearAll";
import Pagination from "../Pagination";
import SavePosts from "./SavePosts";

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
        <ClearAll />
        {params.my === "faq" ? (
          <Questions activities />
        ) : params.my === "save" ? (
          <SavePosts activities={data} userId={userId} likes={likes} />
        ) : !data || data.length === 0 ? (
          <Noposts />
        ) : (
          data.map((ele) => (
            <PostCard key={nanoid()} data={ele} token={userId} likes={likes} />
          ))
        )}
      </div>
      {data && data.length > 0 && params.my !== "save" && (
        <Pagination
          pages={2}
          page={params.page ? parseInt(params.page) : undefined}
        />
      )}
      {/* {data && data.length > 0 && params.my !== "save" && (
     <Pagination
       pages={activitiesData.pages}
       page={params.page ? parseInt(params.page) : undefined}
     />
   )} */}
    </section>
  );
}
