import { Genre } from "./Genre";
import { Platform } from "./Platform";

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
