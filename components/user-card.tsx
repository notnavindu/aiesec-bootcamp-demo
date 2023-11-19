import { User } from "@/lib/types/User";
import Link from "next/link";
import React from "react";

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  return (
    <Link
      href={`/user/${props.user._id.toString()}`}
      className="w-full border rounded-lg flex items-center gap-4 p-2"
    >
      <div className="w-10 h-10 p-1 ">
        <img
          className="bg-white rounded-full"
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Smokey"
        />
      </div>
      <div>{props.user.name}</div>
    </Link>
  );
};

export default UserCard;
