import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Screenshots } from "../entities/Screenshots";

const useScreenshots = (slug: string) => {
  const apiClient = new APIClient<Screenshots>(`/games/${slug}/screenshots`);
  return useQuery<Screenshots[], Error>({
    queryKey: ["screenshots", slug],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};
export default useScreenshots;
