import Search from "../Search/Search";

function NavMenue({ isOpen, setIsOpen }){
    return(
        <>
            <div
                className={`bg-accent absolute inset-0 z-40 origin-right transform transition-transform duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "scale-x-[1]" : "scale-x-[0]"
                }`}
            >
                <div className="fixed w-full bg-accent p-6 sm:p-8 h-[13vh] top-0 left-0 flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-secondary sm:text-6xl">Menue</h1>
                </div>
                <div className="w-full h-px my-2 mt-[14vh] bg-gray-400" />
                <ul className="flex flex-col justify-evenly gap-5 p-6 sm:p-8 text-secondary h-[60vh] ">
                    <li className="text-4xl font-bold transition-all ease-in-out cursor-pointer text-secondary sm:text-6xl hover:text-gray-400">Home</li>
                    <li className="text-4xl font-bold transition-all ease-in-out cursor-pointer text-secondary sm:text-6xl hover:text-gray-400">About</li>
                    <li>
                        <Search />
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavMenue;