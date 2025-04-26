import { MdModeComment, MdOutlineModeComment } from "react-icons/md";

export default function Comments({
  handleComment,
  show,
}: {
  handleComment: () => void;
  show: boolean;
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

      <p>1K Likes</p>
    </div>
  );
}
