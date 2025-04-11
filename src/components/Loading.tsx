import Image from "next/image";
import loading from "../../public/images/loading.png";

export default function Loading() {
  return (
    <div className="flexCenter w-full flex-col self-center">
      <Image
        src={loading}
        alt="hello"
        height={120}
        width={120}
        className="h-[100px] w-[100px] animate-spin object-contain"
      />
      <p className="text-main">Loading...</p>
    </div>
  );
}
