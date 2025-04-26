import { formatTicketDate, formatTime, getTimeAgo } from "@/libs/utils";
import UserInfo from "./UserInfo";

export default function CommentCard({
  comment,
  token,
}: {
  comment: {
    content: string;
    createdAt: string;
    user: {
      userName: string;
      avatar: string;
      userId: string;
    };
  };
  token: string | undefined;
}) {
  const postTime = getTimeAgo(comment.createdAt);
  return (
    <div className="space-y-2 p-2">
      <UserInfo comment user={comment.user} token={token} postTime={postTime} />
      <p className="text-10sm text-neutralHover tablet:text-12sm">
        {comment.content}
      </p>
    </div>
  );
}
