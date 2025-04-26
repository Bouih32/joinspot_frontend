import UserInfo from "./UserInfo";

export default function CommentCard() {
  return (
    <div className="space-y-2 p-2">
      <UserInfo comment />
      <p className="text-10sm text-neutralHover tablet:text-12sm">
        Lorem ipsum dolor sit amet consectetur. Platea ut aenean viverra ut
        vestibulum. Commodo massa venenatis eget nunc vestibulum urna velit sit.
        Mattis neque ipsum enim ac sagittis interdum nam. Donec aliquam integer
        imperdiet et eleifend porta luctus vel morbi.
      </p>
    </div>
  );
}
