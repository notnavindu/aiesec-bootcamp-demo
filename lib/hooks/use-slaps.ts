import useSWR from "swr";
import { User } from "../types/User";
import { Slap } from "../types/Slap";

export const useSlapFeed = () => {
  const { data, error, isLoading } = useSWR(`/api/slaps/feed`, (url: string) =>
    fetch(url).then((r) => r.json())
  );
  console.log("🚀 ~ file: use-slaps.ts:34 ~ useSlapFeed ~ data:", data);

  return {
    feed: data?.feed as Slap[],
    topSlappees: data?.slappees as User[],
    topSlappers: data?.slappers as User[],
    isLoading,
    isError: error,
  };
};
