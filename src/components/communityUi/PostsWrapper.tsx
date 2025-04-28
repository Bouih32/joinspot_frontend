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
    id: string;
  };
}) {
  const token = await getToken();
  let role: string | undefined;
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
    userId = (token as JwtPayload).userId;
  }

  console.log(token);

  const info = params.my === "own" && !token ? [] : await getPosts(params);
  const likes = token ? await getLikedPosts() : [];

  return (
    <section className="flex w-full flex-col justify-between overflow-hidden">
      <div className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
        <PostFeedBack />
        <ClearAll />
        {params.my === "faq" ? (
          <Questions activities />
        ) : params.my === "save" ? (
          <SavePosts
            activities={info.data}
            userId={userId}
            likes={likes}
            role={role}
          />
        ) : !info.data || info.data.length === 0 ? (
          <Noposts />
        ) : (
          info.data.map((ele: PostT) => (
            <PostCard
              key={nanoid()}
              data={ele}
              token={userId}
              likes={likes}
              role={role}
            />
          ))
        )}
      </div>
      {info.data && info.data.length > 0 && params.my !== "save" && (
        <Pagination
          pages={info.pages}
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
