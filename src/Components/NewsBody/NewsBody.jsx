import { useState } from "react";
import { topics } from "./topics";
import NewsMain from "../NewsMain/NewsMain";
import RightAside from "../NewsAside/RightAside";
import LeftAside from "../NewsAside/LeftAside";


function NewsBody(){
    const [topic,setTopic]=useState(topics[0]);
    return(
        <>
           <section className="px-6 sm:px-[5.9rem] tracking-wider flex flex-col justify-evenly gap-5 mt-[16.5vh]">
                <h1 className="text-2xl sm:text-4xl text-primary">Latest News</h1>
                <nav aria-label="Filter News by Topic">
                        <ul role="tablist" className="flex flex-wrap justify-center gap-3 sm:gap-5 sm:justify-start">
                        {topics.map((item) => (
                            <li
                            role="presentation"
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
                </nav>
                <section className="flex mt-5 h-[64vh] gap-4">
                    
                    <aside className="hidden lg:block lg:w-1/4">
                       <LeftAside topic={topic} />
                    </aside>

                    
                    <main className="flex-1 mb-5 overflow-y-auto sm:w-2/3 lg:w-2/4 no-scrollbar">
                        <NewsMain topic={topic} />
                    </main>

                    
                    <aside className="hidden lg:block lg:w-1/4">
                        <RightAside topic={topic} />
                    </aside>
                </section>


           </section>
        </>
    )
}

export default NewsBody;