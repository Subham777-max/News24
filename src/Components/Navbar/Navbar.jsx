import { useState } from "react";
import AnimatedMenuToggle from "./AnimatedMenuToggle";
import NavMenue from "./NavMenue";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <nav className="fixed w-full z-40 bg-[#F7E0DA] p-6 sm:p-8 h-[13vh] top-0 left-0 flex justify-between items-center">
                <h1 className="text-4xl font-bold text-primary sm:text-6xl">News<span className="text-accent">24</span></h1>
            </nav>
            <div className="z-[60] absolute right-[2rem] top-[1.5rem]">
                <AnimatedMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <NavMenue isOpen={isOpen} setIsOpen={isOpen} />
        </>
    )
}
export default Navbar;