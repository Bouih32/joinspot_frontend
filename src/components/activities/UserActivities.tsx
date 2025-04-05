import { getToken } from "@/actions/decodeToken";
import { getUserActivities } from "@/actions/getActivities";
import { JwtPayload } from "jsonwebtoken";
import React from "react";

export default async function UserActivities() {
  const token = await getToken();
  let userId: string | undefined;
  console.log(token);

  if (typeof token !== "string" && token !== null) {
    userId = (token as JwtPayload).userId;
  }

  if (!userId) return;
  const userActivities = await getUserActivities(userId);
  return <div>UserActivities</div>;
}
