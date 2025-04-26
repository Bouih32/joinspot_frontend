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
    <div className="flex items-center gap-[6px]">
      <div onClick={handleComment} className="cursor-pointer">
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
