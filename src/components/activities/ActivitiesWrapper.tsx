import React from "react";
import Success from "./add/Success";
import ClearAll from "./mainFilters/ClearAll";
import Questions from "../sections/support/Questions";
import SaveWrapper from "./SaveWrapper";
import NoActivities from "./NoActivities";
import ActivityCard from "./ActivityCard";
import Pagination from "../Pagination";
import { getActivities } from "@/actions/activityActions";
import { getToken } from "@/actions/decodeToken";
import { JwtPayload } from "jsonwebtoken";
import { nanoid } from "nanoid";

export default async function ActivitiesWrapper({
  params,
}: {
  params: {
    seats: string;
    category: string;
    date: string;
    my: string;
    search: string;
    page: string;
  };
}) {
  let activitiesData = await getActivities(params);

  const token = await getToken();
  let role: string | undefined;
  let userId: string | undefined;

  if (typeof token !== "string" && token !== null) {
    role = (token as JwtPayload).role;
    userId = (token as JwtPayload).userId;
  }

  const data =
    params.my === "own" && (!token || role === "VISITOR")
      ? null
      : activitiesData.activities.filter((ele) => ele.deletedAt === null);
  return (
    <main className="flex w-full flex-col justify-between">
      <div className="flex w-full flex-col items-start space-y-4 pb-5 tablet:space-y-5">
        <Success />
        <ClearAll />
        {params.my === "faq" ? (
          <Questions activities />
        ) : params.my === "save" ? (
          <SaveWrapper activities={data} userId={userId} />
        ) : !data || data.length === 0 ? (
          <NoActivities token={token} params={params} />
        ) : (
          data.map((ele) => (
            <ActivityCard key={nanoid()} full data={ele} userId={userId} />
          ))
        )}
      </div>
      {data && data.length > 0 && params.my !== "save" && (
        <Pagination
          pages={activitiesData.pages}
          page={params.page ? parseInt(params.page) : undefined}
        />
      )}
    </main>
  );
}
