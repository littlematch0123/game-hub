import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: new APIClient<Platform>("/platforms/lists/parents").getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
export default usePlatforms;
