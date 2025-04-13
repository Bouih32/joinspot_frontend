import { getDegrees } from "@/actions/userActions";
import ConfirmCard from "@/components/adminUi/ConfirmCard";
import { degreeT } from "@/libs/types";
import { nanoid } from "nanoid";
import { BiSolidCheckCircle } from "react-icons/bi";

export default async function ConfirmationPage() {
  const degrees = (await getDegrees()) as degreeT[];
  console.log(degrees);
  return (
    <main className="w-full space-y-6 pt-4 tablet:space-y-[56px] tablet:pl-5 tablet:pt-5 laptop:pl-8 laptop:pt-8">
      <div className="flex items-center gap-2 text-14xxl text-neutralDarkHover tablet:text-16xxl laptop:text-20xxl">
        <BiSolidCheckCircle className="text-main" />
        <p>Confirmation</p>
      </div>
      <section className="space-y-3">
        {degrees.map((ele) => (
          <ConfirmCard key={nanoid()} data={ele} />
        ))}
      </section>
    </main>
  );
}
