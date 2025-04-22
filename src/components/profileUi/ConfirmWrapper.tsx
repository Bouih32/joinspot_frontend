import { getDegrees } from "@/actions/userActions";
import { degreeT } from "@/libs/types";
import ConfirmCard from "../adminUi/ConfirmCard";
import NoActivity from "./NoActivity";
import { nanoid } from "nanoid";
import Pagination from "../Pagination";

export default async function ConfirmWrapper({
  params,
}: {
  params: {
    search: string;
    page: string;
  };
}) {
  const data = await getDegrees(params);
  return data.degrees.length > 0 ? (
    <section className="flex h-full flex-col justify-between gap-5 pb-5">
      <section className="space-y-3">
        {data.degrees.map((ele: degreeT) => (
          <ConfirmCard key={nanoid()} data={ele} />
        ))}
      </section>
      <Pagination
        pages={data.pages}
        page={params.page ? parseInt(params.page) : 1}
      />
    </section>
  ) : (
    <NoActivity />
  );
}
