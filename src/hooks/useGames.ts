import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useData<Game>("/games", gameQuery);

export default useGames;
