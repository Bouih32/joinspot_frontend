import { MdModeComment, MdOutlineModeComment } from "react-icons/md";

export default function Comments({
  handleComment,
  show,
  commentsCount,
}: {
  handleComment: () => void;
  show: boolean;
  commentsCount: number;
}) {
  return (
    <div
      className="flex cursor-pointer items-center gap-[6px]"
      onClick={handleComment}
    >
      <div className="cursor-pointer">
        {show ? (
          <MdModeComment className="text-main" />
        ) : (
          <MdOutlineModeComment />
        )}
      </div>

      <p>{commentsCount} Comments</p>
    </div>
  );
}
