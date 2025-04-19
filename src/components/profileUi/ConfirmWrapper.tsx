import { getDegrees } from "@/actions/userActions";
import { degreeT } from "@/libs/types";
import ConfirmCard from "../adminUi/ConfirmCard";
import NoActivity from "./NoActivity";
import { nanoid } from "nanoid";

export default async function ConfirmWrapper() {
  const degrees = (await getDegrees()) as degreeT[];
  return (
    <section className="space-y-3">
      {degrees.length > 0 ? (
        degrees.map((ele) => <ConfirmCard key={nanoid()} data={ele} />)
      ) : (
        <NoActivity />
      )}
    </section>
  );
}
