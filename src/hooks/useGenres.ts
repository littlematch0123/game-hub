import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
// const useGenres = () => useDta<Genre>("/genres");
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
