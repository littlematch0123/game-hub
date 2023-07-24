import { useInfiniteQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameStore from "../store";

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  rating_top: number;
}
const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAllData({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam as number,
        },
      }),
    staleTime: ms("24h"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};
export default useGames;
