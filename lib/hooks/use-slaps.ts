import useSWR from "swr";

export const useTopSlappers = () => {
  const { data, error, isLoading } = useSWR(
    `/api/slaps/top-slappers`,
    (url: string) => fetch(url).then((r) => r.json())
  );

  return {
    topSlappers: data,
    isLoading,
    isError: error,
  };
};
