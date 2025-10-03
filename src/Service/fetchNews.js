import { axiosInstance } from "../Helpers/axiosInstance.js";
import { API_KEY } from "../Constants/key.js"
async function fetchNews(topic="technology",max=3,page=1){

  try {
    const response = await axiosInstance.get(`/search?q=${topic}&lang=en&max=${max}&page=${page}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchNews;