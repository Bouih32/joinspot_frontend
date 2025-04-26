import ShareActivity from "../activities/ShareActivity";
import PostActions from "./PostActions";
import UserInfo from "./UserInfo";

export default function PostCard() {
  return (
    <section className="w-full space-y-4 rounded-xl border border-neutralLightActive p-3 laptop:p-4">
      <div className="flex items-start justify-between">
        <UserInfo />
        <ShareActivity activityId="hello" />
      </div>
      <div className="h-[248px] rounded-[8px] bg-[url('https://i.postimg.cc/YqQ49mxg/71ee06134e79efbc82c55abb06344213f857ddb3.jpg')] bg-cover bg-center bg-no-repeat p-3 laptop:h-[353px]">
        <div className="flex items-center gap-1 tablet:gap-[6px] laptop:gap-3">
          <div className="flexCenter h-[22px] w-fit rounded-[20px] bg-second px-2.5 tablet:h-[30px] tablet:px-3">
            <p className="text-center text-14sm text-white first-letter:uppercase">
              Sport
            </p>
          </div>
          <div className="flexCenter h-[22px] w-fit rounded-[20px] bg-second px-2.5 tablet:h-[30px] tablet:px-3">
            <p className="text-center text-14sm text-white first-letter:uppercase">
              Sport
            </p>
          </div>
          <div className="flexCenter h-[22px] w-fit rounded-[20px] bg-second px-2.5 tablet:h-[30px] tablet:px-3">
            <p className="text-center text-14sm text-white first-letter:uppercase">
              Sport
            </p>
          </div>
        </div>
      </div>
      <PostActions />
    </section>
  );
}
