import { axiosInstance } from "../Helpers/axiosInstance.js";
import { API_KEY } from "../Constants/key.js"
async function fetchTopNews(topic="technology",max=10,page=1){

  try {
    const response = await axiosInstance.get(`/top-headlines?topic=${topic.toLowerCase()}&lang=en&max=${max}&page=${page}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchTopNews;