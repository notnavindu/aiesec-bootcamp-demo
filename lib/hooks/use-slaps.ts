import useSWR from "swr";
import { User } from "../types/User";
import { Slap } from "../types/Slap";

export const useSlapFeed = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/slaps`,
    (url: string) => fetch(url).then((r) => r.json())
  );

  return {
    feed: data?.feed as Slap[],
    topSlappees: data?.slappees as User[],
    topSlappers: data?.slappers as User[],
    isLoading,
    isError: error,
    mutate,
  };
};
