import { CgAdd } from "react-icons/cg";

type TagCardProps = {
  tagId: string;
  tagName: string;
  selectTags: (id: string) => void;
};

export default function TagCard({ tagId, tagName, selectTags }: TagCardProps) {
  return (
    <div
      onClick={() => selectTags(tagId)}
      className="flex items-center gap-2.5 border-t-[0.5px] border-neutralLightActive py-2 text-12lg text-neutral transition-all duration-75 hover:rounded-[8px] hover:bg-main hover:pl-2.5 hover:font-semibold hover:text-white tablet:text-16lg"
    >
      <CgAdd />
      <p className="first-letter:uppercase">{tagName}</p>
    </div>
  );
}
