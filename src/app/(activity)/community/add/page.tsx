import PostForm from "@/components/communityUi/PostForm";
import Container from "@/components/Container";

export default async function AddPostPage() {
  return (
    <section className="h-full w-full tablet:bg-secondLight xl:h-screen">
      <Container classname="py-10 tablet:bg-secondLight">
        <section className="mx-auto w-full space-y-5 rounded-xl border-neutralLightHover bg-white tablet:mt-10 tablet:space-y-[30px] tablet:border tablet:p-6 laptop:w-[1064px] laptop:space-y-[45px] laptop:p-[32px]">
          <div className="space-y-2 tablet:space-y-[6px]">
            <h1 className="text-14xxl text-main tablet:text-16xxl laptop:text-20xxl">
              Share Your Experience with the Community!
            </h1>
            <p className="text-12sm text-neutralDark tablet:text-14sm laptop:text-16sm">
              Want to share a great place, recommend an activity, or discuss an
              experience? Our community page is the perfect place! Connect with
              others, exchange insights, and discover new opportunities. Whether
              it's a hidden gem, a helpful tip, or an exciting event, your post
              can inspire and inform others. Start sharing now and be part of
              the conversation!
            </p>
          </div>
          <PostForm />
        </section>
      </Container>
    </section>
  );
}
