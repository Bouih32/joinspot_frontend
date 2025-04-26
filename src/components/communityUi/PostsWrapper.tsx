import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";
import PostCard from "./PostCard";

export default async function PostsWrapper() {
  const token = await getToken();
  let role: string | undefined;
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
    userId = (token as JwtPayload).userId;
  }
  return (
    <section className="flex w-full flex-col justify-between overflow-hidden">
      <div className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
        <PostCard />
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
