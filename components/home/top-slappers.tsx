"use client";

import { useTopSlappers } from "@/lib/hooks/use-slaps";
import React from "react";
import UserCard from "../user-card";

type Props = {};

const TopSlappers = (props: Props) => {
  const { topSlappers, isLoading, isError } = useTopSlappers();

  return (
    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
      {topSlappers?.length > 0 &&
        topSlappers.map((user) => (
          <div key={user._id!.toString()}>
            <UserCard
              user={user}
              subheading={`${user.slapsGiven ?? 0} Slaps Given`}
            />
          </div>
        ))}
    </div>
  );
};

export default TopSlappers;
