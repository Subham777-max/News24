import { useState } from "react";
import AnimatedMenuToggle from "./AnimatedMenuToggle";
import NavMenue from "./NavMenue";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate=useNavigate();
    return(
        <>
            <nav className="fixed w-full z-40 bg-[#F7E0DA] p-6 sm:p-8 h-[13vh] top-0 left-0 flex justify-between items-center">
                <h1 onClick={()=>navigate("/")} className="text-4xl font-bold cursor-pointer text-primary sm:text-6xl">News<span className="text-accent">24</span></h1>
            </nav>
            <section className="z-[60] fixed right-[2rem] top-[1.5rem]">
                <AnimatedMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            </section>
            <NavMenue isOpen={isOpen} setIsOpen={isOpen} />
        </>
    )
}
export default Navbar;