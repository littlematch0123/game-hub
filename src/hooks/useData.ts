import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string, genre?: number, platform?: number) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        params: {
          genres: genre,
          platforms: platform,
        },
      })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError((err as Error).message);
      });
    return () => controller.abort();
  }, [endpoint, genre, platform]);
  return { data, error, isLoading };
};

export default useData;
