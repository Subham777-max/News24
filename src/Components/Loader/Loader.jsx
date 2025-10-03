function Loader(){
    return(
        <div className="flex flex-col items-center justify-center h-[64vh]">  
            <div className="w-12 h-12 border-4 rounded-full border-accent border-t-transparent animate-spin"></div>
            <p className="mt-4 text-lg font-medium text-primary">Loading news...</p>
        </div>
    )
}

export default Loader;