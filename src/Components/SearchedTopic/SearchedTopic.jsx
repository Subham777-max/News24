import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchTopNews from "../../Service/fetchTopNews";
import Loader from "../Loader/Loader";

function SearchedTopic({ topic }){
    const [page,setPage]=useState(1)
    const navigate=useNavigate();
    function handleClick(article){
        navigate(`/News-Details/${article.id}`, { state: { article } });
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ["topNews", topic,page], 
        queryFn: () => fetchTopNews(topic, 10, page),
        cacheTime: 1000*2*60,
        staleTime: 1000*2*60,
    });

    if (isLoading) return <Loader />
    if (error){
        return (
            <div className="flex flex-col items-center justify-center w-full h-[60vh] text-center">
            <p className="px-6 py-4 text-lg font-semibold text-red-600 border border-red-200 shadow-sm bg-red-50 rounded-xl">
                No article found. <br /> Please re-check your search or try again later.
            </p>
            </div>
        );
    }    
    return(
        <>
            <main className="flex flex-col gap-5 md:px-6 justify-evenly mt-[14.5vh]">
                <h1
                    className="px-6 mt-8 mb-6 text-3xl font-bold tracking-wide text-center sm:text-5xl text-primary sm:text-left sm:px-20"
                    >
                    Latest <span className="text-accent">News</span> on{" "}
                    <span className="text-gray-600 capitalize">{topic}</span>
                </h1>

                <section className="w-full overflow-y-auto no-scrollbar md:px-[15rem]">
                    {data.articles.map((article)=>{
                            return(
                                <article
                                    key={article.id}
                                    className="w-full mb-6 overflow-x-hidden cursor-pointer"
                                    onClick={()=>handleClick(article)}
                                    >
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover w-full h-64 transition-all ease duration-[0.5s] hover:scale-[1.1]"
                                        loading='lazy'
                                    />
                                    <section className="p-4">
                                        <h2 className="mb-2 text-xl font-semibold md:text-2xl text-primary">
                                            {article.title}
                                        </h2>
                                        <p className="text-sm text-gray-700 md:text-base">{article.description}</p>
                                    </section>
                                </article>
                            )
                        })}
                </section>
                <nav aria-label="News Pagination" className="flex justify-center gap-6 mt-6 mb-3">
                    <button onClick={()=>setPage(page-1)} disabled={page===1} className={`py-2 transition border px-9 text-accent border-accent  ${page===1?"opacity-50":"hover:bg-accent hover:text-white"}`}>
                        Prev
                    </button>
                    <button onClick={()=>setPage(page+1)} className="py-2 text-white transition px-9 bg-accent hover:bg-accent/80">
                        Next
                    </button>
                </nav>
            </main>
        </>
    )
}
export default SearchedTopic;