import { useQuery } from '@tanstack/react-query'
import fetchTopNews from '../../Service/fetchTopNews.js';
function NewsMain({ topic }){
    const { data, isLoading, error } = useQuery({
        queryKey: ["topNews", topic], 
        queryFn: () => fetchTopNews(topic, 10, 1),
        cacheTime: 1000*2*60,
        staleTime: 1000*2*60,
    });
    if (isLoading) return <p>Loading news...</p>;
    if (error) return <p>Error fetching news</p>;
    console.log(data);
    return(
        <>
            {data.articles.map((article)=>{
                return(
                    <div
                        key={article.id}
                        className="w-full mb-6 overflow-x-hidden"
                        >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="object-cover w-full h-64 transition-all ease duration-[0.5s] hover:scale-[1.1]"
                        />
                        <div className="p-4">
                            <h2 className="mb-2 text-xl font-semibold md:text-2xl text-primary">
                                {article.title}
                            </h2>
                            <p className="text-sm text-gray-700 md:text-base">{article.description}</p>
                        </div>
                    </div>

                )
            })}
        </>
    )
}
export default NewsMain;