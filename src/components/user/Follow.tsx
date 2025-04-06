"use client";

import { BsFillPersonPlusFill, BsFillPersonXFill } from "react-icons/bs";
import Button from "../Button";
import { useParams, useRouter } from "next/navigation";
import { handleFollow } from "@/actions/getActivities";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Follow({ following }: { following: string[] }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = useParams();
  const handleClick = async () => {
    setLoading(true);
    await handleFollow(id as string);
    setLoading(false);
    router.refresh();
  };
  return (
    <div>
      {following.includes(id as string) ? (
        <div className="" onClick={handleClick}>
          <Button
            classname="p-2 tablet:p-2 "
            icon={
              loading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                <BsFillPersonXFill />
              )
            }
          />
        </div>
      ) : (
        <div className="" onClick={handleClick}>
          <Button
            classname="p-2 tablet:p-2 "
            icon={
              loading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                <BsFillPersonPlusFill />
              )
            }
          />
        </div>
      )}
    </div>
  );
}
