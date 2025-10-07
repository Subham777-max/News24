import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";

function NavMenue({ isOpen, setIsOpen }){
    const navigate=useNavigate();
    return(
        <>
            <section
                className={`bg-accent fixed w-full h-full inset-0 z-40 origin-right transform transition-transform duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "scale-x-[1]" : "scale-x-[0]"
                }`}
            >
                <section className="fixed w-full bg-accent p-6 sm:p-8 h-[13vh] top-0 left-0 flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-secondary sm:text-6xl">Menue</h1>
                </section>
                <div className="w-full h-px my-2 mt-[14vh] bg-gray-400" />
                <ul className="flex flex-col justify-evenly gap-5 p-6 sm:p-8 text-secondary h-[70vh] ">
                    <li className="text-4xl font-bold transition-all ease-in-out cursor-pointer text-secondary sm:text-6xl hover:text-gray-400" onClick={()=>{
                        navigate("/");
                        setIsOpen(false);
                    }}>Home</li>
                    <li className="text-4xl font-bold transition-all ease-in-out cursor-pointer text-secondary sm:text-6xl hover:text-gray-400" onClick={()=>{
                        navigate("/About");
                        setIsOpen(false);
                    }}>About</li>
                    <li className="text-4xl font-bold transition-all ease-in-out cursor-pointer text-secondary sm:text-6xl hover:text-gray-400" onClick={()=>{
                        navigate("/About");
                        setIsOpen(false);
                    }}>Your Favourits</li>
                    <li>
                        <Search setIsOpen={setIsOpen} />
                    </li>
                </ul>
            </section>
        </>
    )
}
export default NavMenue;