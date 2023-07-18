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
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => useData<Game>("/games", selectedGenre?.id, selectedPlatform?.id);

export default useGames;
