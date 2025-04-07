import { getFollowing } from "@/actions/userActions";
import React from "react";
import Follow from "./Follow";
import SendMessage from "./SendMessage";

export default async function UserCTA() {
  const following = await getFollowing();
  return (
    <div className="flexCenter gap-2">
      <Follow following={following} />
      <SendMessage />
    </div>
  );
}
