import { getToken } from "@/actions/decodeToken";
import { getActivityById } from "@/actions/getActivities";
import { getHeaderData } from "@/actions/getUserData";
import EditForm from "@/components/activities/add/EditForm";
import Container from "@/components/Container";
import { JwtPayload } from "jsonwebtoken";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userCategory = await getHeaderData();
  const activity = await getActivityById(id);
  const token = await getToken();
  let userId;

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }

  if (activity.userId !== userId)
    return (
      <div className="grid w-full place-content-center pt-[100px]">
        <p className="text-40xl text-error">
          You are not allowed here you sneaaaakyyy, No Uii For u!!
        </p>
      </div>
    );
  return (
    <section className="h-full w-full tablet:bg-secondLight xl:h-screen">
      <Container classname="py-10 ">
        <section className="mx-auto w-full space-y-5 rounded-xl border-neutralLightHover bg-white tablet:mt-10 tablet:space-y-[30px] tablet:border tablet:p-6 laptop:w-[1064px] laptop:space-y-[45px] laptop:p-[32px]">
          <div className="space-y-2 tablet:space-y-[6px]">
            <h1 className="text-14xxl text-main tablet:text-16xxl laptop:text-20xxl">
              Edit your activity
            </h1>
            <p className="text-12sm text-neutralDark tablet:text-14sm laptop:text-16sm">
              According to the security policy, certain activity informations
              cannot be edited.
            </p>
          </div>
          <EditForm
            userCategory={userCategory.categoryId}
            activity={activity}
          />
        </section>
      </Container>
    </section>
  );
}
