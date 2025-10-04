import { useQuery } from "@tanstack/react-query";
import fetchNews from "../../Service/fetchNews";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

function LeftAside({ topic }) {
    const navigate=useNavigate();
    function handleClick(article){
        navigate(`/News-Details/${article.id}`, { state: { article } });
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ["news", topic], 
        queryFn: () => fetchNews(topic, 3, 1),
        cacheTime: 1000*2*60,
        staleTime: 1000*2*60,
    });

    if (isLoading) return <Loader />
    if (error) throw error;
    return (
        <div className="flex flex-col w-full h-full gap-4">
            <div className="w-full h-[15rem] overflow-y-auto no-scrollbar  " onClick={()=>handleClick(data.articles[2])}>
                    <img src={data.articles[2].image} alt="" className="object-cover w-full h-[10rem] transition-all ease duration-[0.5s] hover:scale-[1.1]" />
                    <h1 className="p-2 text-primary">
                        {data.articles[2].title}
                    </h1>
            </div>
            <div className="w-full h-px my-2 bg-gray-400" />
            <div className="w-full overflow-x-hidden no-scrollbar" onClick={()=>handleClick(data.articles[1])}>
                <img src={data.articles[1].image} alt="" className="object-cover w-full h-[10rem] transition-all ease duration-[0.5s] hover:scale-[1.1]" />
                <div>
                    <h1 className="p-2 text-xs text-gray-600">
                        {data.articles[1].title}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default LeftAside;
