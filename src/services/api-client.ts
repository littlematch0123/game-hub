import axios, { AxiosInstance } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
interface Props {
  genres?: number;
  parent_platforms?: number;
  ordering: string;
  search: string;
}
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY as string,
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (params?: Props) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { params })
      .then((res) => res.data.results);
}
export default APIClient;
