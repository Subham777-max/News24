import { useQuery } from '@tanstack/react-query'
import fetchTopNews from '../../Service/fetchTopNews.js';
import { useContext, useState } from 'react';
import Loader from '../Loader/Loader.jsx';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AppContext } from '../../Context/CreateContext.jsx';
function NewsMain({ topic }){
    const { objArr, setObjArr } = useContext(AppContext);
    const [page,setPage]=useState(1);
    const navigate=useNavigate();
    function handleClick(article){
        navigate(`/News-Details/${article.id}`, { state: { article } });
    }
    function handleFavouritClick(e,article){
        e.stopPropagation();
        setObjArr([...objArr,article]);
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ["topNews", topic,page], 
        queryFn: () => fetchTopNews(topic, 10, page),
        cacheTime: 1000*2*60,
        staleTime: 1000*2*60,
    });

    if (isLoading) return <Loader />
    if (error) throw error;
    return(
        <>
            {data.articles.map((article)=>{
                return(
                    <article
                        key={article.id}
                        className="w-full mb-6 overflow-x-hidden cursor-pointer"
                        onClick={()=>handleClick(article)}
                        >
                        <section className='relative w-full h-64 overflow-hidden group'>
                                <img
                                src={article.image}
                                alt={article.title}
                                className="object-cover w-full h-full transition-all ease duration-[0.5s] hover:scale-[1.1]"
                                loading='lazy'
                                />
                                <section style={{ background: "linear-gradient(transparent, black)" }} className='w-full hidden lg:flex absolute transition-all ease duration-[0.5s] bottom-[-40%] group-hover:bottom-0 h-[40%]  justify-between items-center px-6 text-white text-4xl'><h1>Click to See</h1><span onClick={(e)=>handleFavouritClick(e,article)}>{objArr.some(a => a.id === article.id) ? <FaHeart color='red' /> : <CiHeart />}</span></section>
                                <section style={{ background: "linear-gradient(transparent, black)" }} className='w-full lg:hidden absolute transition-all ease duration-[0.5s] bottom-0 h-[40%] flex justify-between items-center px-6 text-white text-2xl'><h1>Click to See</h1><span onClick={(e)=>handleFavouritClick(e,article)}>{objArr.some(a => a.id === article.id) ? <FaHeart color='red' /> : <CiHeart />}</span></section>
                        </section>
                        <section className="p-4">
                            <h2 className="mb-2 text-xl font-semibold md:text-2xl text-primary">
                                {article.title}
                            </h2>
                            <p className="text-sm text-gray-700 md:text-base">{article.description}</p>
                        </section>
                    </article>

                )
            })}
            <nav aria-label="News Pagination" className="flex justify-center gap-6 mt-6 mb-5">
                <button onClick={()=>setPage(page-1)} disabled={page===1} className={`py-2 transition border px-7 text-accent border-accent  ${page===1?"opacity-50":"hover:bg-accent hover:text-white"}`}>
                    Prev
                </button>
                <button onClick={()=>setPage(page+1)} className="py-2 text-white transition px-7 bg-accent hover:bg-accent/80">
                    Next
                </button>
            </nav>
        </>
    )
}
export default NewsMain;