import { cn } from "@/libs/utils";
import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  signup?: boolean;
  reverse?: boolean;
};

export default function AuthWrapper({
  children,
  reverse,
  signup,
}: WrapperProps) {
  return (
    <main
      className={cn(
        "flex h-screen flex-col tablet:flex-row",
        reverse && "flex-col-reverse",
      )}
    >
      <section
        className={cn(
          "flex flex-col justify-between bg-red-300 px-4 py-[29px] font-poppins text-white tablet:w-[504px] tablet:px-[50px] tablet:py-[78px] laptop:px-20 laptop:py-[61px] xl:w-[712px]",
          reverse && "text-end",
        )}
      >
        <h2>LOGO</h2>
        {signup ? (
          <p className="text-22xl self-end tablet:self-start tablet:text-40xl xl:text-56xl">
            Be a <br />
            Joinspot Host
          </p>
        ) : (
          <p className="text-22xl self-end tablet:self-start tablet:text-40xl xl:text-56xl">
            Build Connections <br /> Through Events
          </p>
        )}
      </section>
      <section className="flexCenter flex-1 flex-col gap-[28px] font-openSans">
        {children}
      </section>
    </main>
  );
}
