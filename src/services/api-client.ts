import axios, { AxiosInstance } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
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

  getAll = () =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data.results);
}
export default APIClient;
