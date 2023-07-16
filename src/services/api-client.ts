import axios, { AxiosInstance } from "axios";
console.log("aaa", import.meta.env.VITE_API_KEY);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY as string,
  },
});
export default axiosInstance;
