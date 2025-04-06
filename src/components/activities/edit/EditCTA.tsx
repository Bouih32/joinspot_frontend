import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

export default function EditCTA({ id }: { id: string }) {
  return (
    <Container classname="mt-5">
      <section className="flexBetween">
        <Link href="/activities">
          <BsArrowLeftShort className="text-[30px] text-second" />
        </Link>
        <Link href={`/activities/${id}/edit`}>
          <Button>Edit activity</Button>
        </Link>
      </section>
    </Container>
  );
}
