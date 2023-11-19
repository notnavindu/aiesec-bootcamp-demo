"use client";

import { useTopSlappees } from "@/lib/hooks/use-slaps";
import UserCard from "../user-card";

type Props = {};

const TopSlappees = (props: Props) => {
  const { topSlappees, isLoading, isError } = useTopSlappees();

  return (
    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
      {topSlappees?.length > 0 &&
        topSlappees.map((user) => (
          <div key={user._id!.toString()}>
            <UserCard
              user={user}
              subheading={`${user.slapsRecieved ?? 0} Slaps Recieved`}
            />
          </div>
        ))}
    </div>
  );
};

export default TopSlappees;
