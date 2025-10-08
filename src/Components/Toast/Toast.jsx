function Toast({ isTrue }){
    return(
        <>
            <section className={`w-full md:w-[20%] flex justify-center items-center z-50 text-xs h-[5rem] text-secondary bg-primary p-4 fixed top-0 left-1/2 -translate-x-1/2 transition-all ease duration-500 ${isTrue ? 'translate-y-4' : '-translate-y-[100%]'}`}>
                <p>Saved as your favourit</p>
            </section>
        </>
    )
}

export default Toast;