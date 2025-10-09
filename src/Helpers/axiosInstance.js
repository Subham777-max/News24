import axios from "axios";
export const axiosInstance=axios.create({
    baseURL:`https://gnews.io/api/v4`
})