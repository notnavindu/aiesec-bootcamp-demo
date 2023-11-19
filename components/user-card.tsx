import { User } from "@/lib/types/User";
import Link from "next/link";
import React from "react";

type Props = {
  user: User;
  subheading?: string;
};

const UserCard = (props: Props) => {
  return (
    <Link
      href={`/user/${props.user._id!.toString()}`}
      className="w-full border rounded-lg flex items-center gap-4 p-2"
    >
      <div className="w-10 h-10 p-1  flex-shrink-0">
        <img className="bg-white rounded-full" src={props.user.image} />
      </div>
      <div className="flex flex-col">
        <div>{props.user.name}</div>
        {props.subheading && (
          <div className="text-sm opacity-50">{props.subheading}</div>
        )}
      </div>
    </Link>
  );
};

export default UserCard;
