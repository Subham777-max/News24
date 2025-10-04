import { useQuery } from "@tanstack/react-query";
import BitcoinPrice from "./BitcoinPrice";
import fetchNews from "../../Service/fetchNews";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

function RightAside({ topic }) {
    const navigate=useNavigate();
    function handleClick(article){
        navigate(`/News-Details/${article.id}`, { state: { article } });
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ["news", topic], 
        queryFn: () => fetchNews(topic, 1, 1),
        cacheTime: 1000*2*60,
        staleTime: 1000*2*60,
    });

    if (isLoading) return <Loader />
    if (error) return <p>Error fetching news</p>;
    return (
        <div className="flex flex-col w-full h-full gap-4">
            <div className="w-full h-[15rem] bg-accent text-secondary flex flex-col justify-center p-6 gap-2  ">
                    <h3 className="text-sm tracking-wide uppercase opacity-80">
                        Number Today
                    </h3>
                    <hr className="my-2 border-gray-200" />
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                        <BitcoinPrice />
                    </h1>
                    <p className="text-base opacity-90">
                        is the price of Bitcoin curently.
                    </p>
            </div>
            <div className="w-full h-px bg-gray-400" />
            <div className="w-full overflow-x-hidden no-scrollbar" onClick={()=>handleClick(data.articles[0])}>
                <img src={data.articles[0].image} alt="" className="object-cover w-full h-[10rem] transition-all ease duration-[0.5s] hover:scale-[1.1]" />
                <div>
                    <h1 className="p-2 text-xs text-gray-600">
                        {data.articles[0].title}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default RightAside;
