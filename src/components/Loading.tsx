import Image from "next/image";

export default function Loading() {
  return (
    <div className="flexCenter w-full flex-col self-center">
      <Image
        src="https://i.postimg.cc/Gph057Lr/loading.png"
        alt="hello"
        height={120}
        width={120}
        className="h-[100px] w-[100px] animate-spin object-contain"
      />
      <p className="text-main">Loading...</p>
    </div>
  );
}
