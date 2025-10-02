import { useState } from "react";
import { topics } from "./topics";
import NewsMain from "../NewsMain/NewsMain";

function NewsBody(){
    const [topic,setTopic]=useState(topics[0]);
    return(
        <>
           <header className="p-6 sm:p-8">
                <h1 className="text-4xl font-bold text-primary sm:text-6xl">News<span className="text-accent">24</span></h1>
           </header>
           <section className="px-6 mt-2 sm:px-[5.9rem] tracking-wider flex flex-col justify-evenly gap-5 ">
                <h1 className="text-2xl sm:text-4xl text-primary">Latest News</h1>
                <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 sm:justify-start">
                    {topics.map((item) => (
                        <li
                        key={item}
                        className={
                            `px-3 py-1 text-sm border cursor-pointer ${topic===item?"border-accent text-accent":"border-primary text-primary"} hover:border-accent hover:text-accent rounded-2xl sm:text-base`
                        }
                        onClick={()=>setTopic(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <section className="flex mt-5 h-[64vh] gap-4">
                    
                    <aside className="hidden w-1/4 bg-gray-100 sm:block">
                        
                    </aside>

                    
                    <main className="flex-1 overflow-y-auto sm:w-2/4 no-scrollbar">
                       <NewsMain topic={topic} />
                    </main>

                    
                    <aside className="hidden w-1/4 bg-gray-100 sm:block">
                        jbffo
                    </aside>
                </section>


           </section>
        </>
    )
}

export default NewsBody;