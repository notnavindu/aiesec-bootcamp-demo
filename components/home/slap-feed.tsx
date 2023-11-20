"use client";

import { useSlapFeed } from "@/lib/hooks/use-slaps";
import FeedCard from "../feed-card";
import { RefreshCcwDot } from "lucide-react";
import { Button } from "../ui/button";

type Props = {};

const SlapFeed = (props: Props) => {
  const { feed, isLoading, isError, mutate } = useSlapFeed();

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl mt-4">Slap Feed</h2>

        <Button onClick={mutate} variant={"ghost"}>
          <RefreshCcwDot />
        </Button>
      </div>

      <div className="mt-2">
        <div className="w-full flex flex-col gap-3">
          {feed?.length > 0 &&
            feed.map((slap) => (
              <div key={slap._id!.toString()}>
                <FeedCard slap={slap} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SlapFeed;
