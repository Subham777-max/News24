import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ setIsOpen }){
    const [value,setValue]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate(`/Topics/${value.toLowerCase()}`);
        setIsOpen(false);
        setValue('');
    }
    return(
        <>
            <form className="flex items-center w-full max-w-sm border-b-2 border-secondary" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search news by topic..."
                                className="w-full px-2 py-2 bg-transparent border-none outline-none text-secondary placeholder-secondary focus:outline-none"
                                value={value}
                                onChange={(e)=>setValue(e.target.value)}
                            />
                            <button type="submit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 cursor-pointer text-secondary"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                                        />
                                </svg>
                            </button>
                        </form>
        </>
    )
}
export default Search;