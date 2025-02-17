import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import logo from "../../../../../public/images/logo.png";
import Container from "@/components/Container";
import NewPswrd from "@/components/authUi/NewPswrd";

export default async function page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return (
    <>
      <main className="gridCenter relative h-screen bg-resetBg bg-cover bg-center bg-no-repeat">
        <div className="absolute left-4 top-2 flex items-center gap-3 tablet:left-[30px] tablet:top-[30px] laptop:gap-[15px] xl:left-[100px]">
          <Link href="/login">
            <BsArrowLeftShort className="text-[30px] text-secondHover tablet:text-[40px]" />
          </Link>

          <Image
            src={logo}
            alt="logo"
            className="hidden h-[21.986px] w-[124px] object-contain tablet:block tablet:h-[32.979px] tablet:w-[217px] laptop:h-[38.5px] laptop:w-[227px]"
          />
        </div>

        <Container classname="flexCenter">
          <div className="h-[386px] w-full rounded-[40px] bg-resetGrad p-[2px] tablet:h-[340px] tablet:w-[632px] tablet:rounded-[60px]">
            <NewPswrd token={token} />
          </div>
        </Container>
      </main>
    </>
  );
}
