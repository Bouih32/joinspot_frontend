import { getHeaderData } from "@/actions/getUserData";
import AddForm from "@/components/activities/add/AddForm";
import Container from "@/components/Container";

export default async function page() {
  const userCategory = await getHeaderData();

  return (
    <Container classname="py-10 bg-secondLight">
      <section className="mx-auto w-full space-y-5 rounded-xl border-neutralLightHover bg-white px-4 py-[22px] tablet:mt-10 tablet:space-y-[30px] tablet:border laptop:w-[1064px] laptop:space-y-[45px] laptop:py-8 laptop:pb-[70px]">
        <div className="space-y-2 tablet:space-y-[6px]">
          <h1 className="text-14xxl text-main tablet:text-16xxl laptop:text-20xxl">
            Add a New Activity
          </h1>
          <p className="text-12sm text-neutralDark tablet:text-14sm laptop:text-16sm">
            <span className="font-semibold">
              Host an Experience and Connect with Others!
            </span>
            <br />
            Organizing an activity is a great way to meet like-minded people,
            share your passion, and create memorable experiences. Whether you're
            offering a professional workshop or a casual get-together, JoinSpot
            makes it easy for others to discover and join your event.
          </p>
        </div>
        <AddForm userCategory={userCategory.categoryId} />
      </section>
    </Container>
  );
}
