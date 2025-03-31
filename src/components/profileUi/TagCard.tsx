import { cn } from "@/libs/utils";
import { CgAdd } from "react-icons/cg";

type TagCardProps = {
  tagId: string;
  tagName: string;
  selectTags: (id: string) => void;
  selectedTags: string[];
};

export default function TagCard({
  tagId,
  tagName,
  selectTags,
  selectedTags,
}: TagCardProps) {
  return (
    <div
      onClick={() => selectTags(tagId)}
      className={cn(
        "flex items-center gap-2.5 border-t-[0.5px] border-neutralLightActive py-2 text-12lg text-neutral transition-all duration-75 hover:rounded-[8px] hover:bg-main hover:pl-2.5 hover:font-semibold hover:text-white tablet:text-16lg",
        selectedTags.includes(tagId) &&
          "rounded-[8px] bg-main pl-2.5 font-semibold text-white",
      )}
    >
      <CgAdd className={cn(selectedTags.includes(tagId) && "rotate-45")} />
      <p className="first-letter:uppercase">{tagName}</p>
    </div>
  );
}
