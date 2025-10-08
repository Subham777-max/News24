import axios from "axios";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
export const axiosInstance=axios.create({
    baseURL:`${CORS_PROXY}https://gnews.io/api/v4`
})