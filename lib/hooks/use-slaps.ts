import useSWR from "swr";
import { User } from "../types/User";
import { Slap } from "../types/Slap";

export const useTopSlappers = () => {
  const { data, error, isLoading } = useSWR(
    `/api/slaps/top-slappers`,
    (url: string) => fetch(url).then((r) => r.json())
  );

  return {
    topSlappers: data?.slappers as User[],
    isLoading,
    isError: error,
  };
};

export const useTopSlappees = () => {
  const { data, error, isLoading } = useSWR(
    `/api/slaps/top-slappees`,
    (url: string) => fetch(url).then((r) => r.json())
  );

  return {
    topSlappees: data?.slappers as User[],
    isLoading,
    isError: error,
  };
};

export const useSlapFeed = () => {
  const { data, error, isLoading } = useSWR(`/api/slaps/feed`, (url: string) =>
    fetch(url).then((r) => r.json())
  );

  return {
    feed: data?.feed as Slap[],
    isLoading,
    isError: error,
  };
};
