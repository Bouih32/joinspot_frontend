import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function Save() {
  const [save, setSave] = useState(false);

  const handleSave = () => {
    setSave((prev) => !prev);
  };
  return (
    <div onClick={handleSave} className="cursor-pointer text-main">
      {save ? <FaBookmark /> : <FaRegBookmark />}
    </div>
  );
}
