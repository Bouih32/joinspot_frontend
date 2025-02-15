import Container from "@/components/Container";
import logo from "../../../../public/images/logo.png";
import Image from "next/image";
import { BsArrowLeftShort } from "react-icons/bs";
import MainTitle from "@/components/authUi/MainTitle";
import ResetForm from "@/components/authUi/ResetForm";

export default function ResetPage() {
  return (
    <>
      <main className="bg-resetBg gridCenter relative h-screen bg-cover bg-center bg-no-repeat">
        <div className="absolute left-4 top-2 flex items-center gap-3 tablet:left-[30px] tablet:top-[30px] laptop:gap-[15px] xl:left-[100px]">
          <BsArrowLeftShort className="text-[30px] text-secondHover tablet:text-[40px]" />
          <Image
            src={logo}
            alt="logo"
            className="hidden h-[21.986px] w-[124px] object-contain tablet:block tablet:h-[32.979px] tablet:w-[217px] laptop:h-[38.5px] laptop:w-[227px]"
          />
        </div>

        <Container classname="flexCenter">
          <div className="bg-resetGrad h-[386px] w-full rounded-[40px] p-[2px] tablet:h-[340px] tablet:w-[632px] tablet:rounded-[60px]">
            <ResetForm />
          </div>
        </Container>
      </main>
    </>
  );
}
