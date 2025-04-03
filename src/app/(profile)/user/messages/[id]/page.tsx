import SenderUi from "@/components/profileUi/messages/SenderUi";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default async function MessagDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="w-full space-y-6 pb-10 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDark tablet:text-16xxl laptop:text-20xxl">
        <HiOutlineMail className="text-main" />
        <p>Messages</p>
      </div>
      <section className="space-y-[22px] rounded bg-neutralLight p-3 tablet:rounded-[8px] tablet:p-5">
        <div className="flex items-center gap-2.5">
          <Link href="/user/messages">
            <BsArrowLeftShort className="text-[24px] text-second" />
          </Link>
          <SenderUi />
        </div>
        <p className="text-12xxl text-neutralDarkHover">
          Lorem ipsum dolor sit amet consectetur. Eget dignissim pharetra
          feugiat nibh mattis et. Adipiscing justo massa id vitae pretium. Est
          ultricies sit vulputate purus velit. In at fermentum cras malesuada
          sollicitudin. Sit integer convallis eget malesuada orci ullamcorper
          aliquam arcu. Arcu tincidunt nam porttitor id. Dui eget faucibus
          ornare tristique eu enim arcu. Ac eget sit arcu volutpat nisl arcu.
          Diam sit ullamcorper nulla risus facilisis mattis orci eleifend.
          Turpis interdum sagittis sagittis cras egestas ac. Mauris eget id a
          egestas faucibus ut. Euismod eget sed neque venenatis. Vitae nunc nibh
          volutpat nunc molestie in viverra. Aliquam libero quam hac
          pellentesque tincidunt eget. Varius enim turpis in non. Nunc sagittis
          feugiat arcu nunc sapien tortor. Venenatis faucibus mauris id in
          pulvinar sit ac ut massa. Feugiat imperdiet aenean nullam sem sed
          dignissim mattis aliquam. Egestas nisl ut ut tortor lacus sed commodo.
          Turpis nulla convallis velit consequat ultricies vel vestibulum.
          Condimentum consectetur vitae dapibus sit massa. Montes adipiscing
          aliquet fermentum aliquam mus consequat ipsum. Dignissim sed dignissim
          enim sapien urna bibendum. Integer est tincidunt sed in. Duis risus
          risus turpis in sed diam aenean mi sed.
        </p>
      </section>
    </main>
  );
}
