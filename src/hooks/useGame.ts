import { useQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  rating_top: number;
}
const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};
export default useGame;
