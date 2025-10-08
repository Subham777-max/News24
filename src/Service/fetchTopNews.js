import { axiosInstance } from "../Helpers/axiosInstance.js";
const API_KEY=import.meta.env.VITE_API_KEY;
console.log(API_KEY)
async function fetchTopNews(topic="technology",max=10,page=1){

  try {
    const response = await axiosInstance.get(`/top-headlines?topic=${topic.toLowerCase()}&lang=en&max=${max}&page=${page}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchTopNews;