import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div 
            className="flex flex-col items-center justify-center h-screen px-4 text-center"
        >
            <div className="w-full max-w-xl p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                
                <p 
                    className="mb-6 font-extrabold text-8xl drop-shadow-md text-accent"
                >
                    404
                </p>

                <h1 
                    className="mb-4 text-3xl font-extrabold sm:text-4xl text-primary"
                >
                    Page Not Found
                </h1>
                
                
                <p className="mb-8 text-lg text-gray-700">
                    The news story you are looking for may have been removed, or the link you followed is incorrect.
                </p>
                <Link
                    to="/"
                    className="inline-block px-8 py-3 font-bold text-white transition-all duration-300 rounded-lg shadow-md bg-accent hover:shadow-lg"
                    style={{border: '1px solid transparent' }}
                >
                    Go Back to the Headlines
                </Link>
            </div>
        </div>
    );
}

export default NotFound;