"use client";

import { useSlapFeed } from "@/lib/hooks/use-slaps";
import FeedCard from "../feed-card";

type Props = {};

const SlapFeed = (props: Props) => {
  const { feed, isLoading, isError } = useSlapFeed();

  return (
    <div className="w-full flex flex-col gap-3">
      {feed?.length > 0 &&
        feed.map((slap) => (
          <div key={slap._id!.toString()}>
            <FeedCard slap={slap} />
          </div>
        ))}
    </div>
  );
};

export default SlapFeed;
