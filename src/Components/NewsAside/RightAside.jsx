import BitcoinPrice from "./BitcoinPrice";

function RightAside() {
    return (
        <div className="flex flex-col w-full h-full gap-4">
        {/* Number Today Card */}
        <div className="w-full h-[15rem] bg-accent text-secondary flex flex-col justify-center p-6 gap-2  ">
                <h3 className="text-sm tracking-wide uppercase opacity-80">
                    Number Today
                </h3>
                <hr className="my-2 border-gray-200" />
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                    <BitcoinPrice />
                </h1>
                <p className="text-base opacity-90">
                    is the price of Bitcoin today
                </p>
        </div>
        <div className="w-full h-px bg-gray-400" />
        </div>
    );
}

export default RightAside;
