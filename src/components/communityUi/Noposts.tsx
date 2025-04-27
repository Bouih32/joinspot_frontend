import Image from "next/image";

export default function Noposts() {
  return (
    <section className="space-y-5 self-center justify-self-center text-center tablet:mt-10">
      <Image
        src="https://i.postimg.cc/R0mynP6K/empty.png"
        alt="empty"
        height={327}
        width={517}
        className="h-[207px] w-[327px] object-contain tablet:h-[327px] tablet:w-[517px]"
      />

      <div className="">
        <h1 className="text-16xxl text-main">No Posts Found!</h1>
        <p className="text-14xxl text-secondActive">
          OOps, looks like no results were found, Please try again later .
        </p>
      </div>
    </section>
  );
}
