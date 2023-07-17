import useData from "./useData";
import { Genre } from "./useGenres";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", selectedGenre?.id);

export default useGames;
