import axios from "axios";

const PROXY = "https://api.allorigins.win/raw?url=";

export const axiosInstance = axios.create({
  baseURL: PROXY + encodeURIComponent("https://gnews.io/api/v4"),
});
