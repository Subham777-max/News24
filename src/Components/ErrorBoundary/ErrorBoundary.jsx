import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-4 text-primary bg-[#F7E0DA]"> 
            <div className="w-full max-w-xl p-8 text-center bg-white border border-gray-100 rounded-md shadow-xl">
                
                <h2 className="mb-4 text-4xl font-extrabold text-[#363636] drop-shadow-sm"> 
                    Uh oh! We hit a snag.
                </h2>
                

                <p className="mb-6 text-lg text-gray-700">
                    We're unable to load the news content right now. This is often a quick fix.
                </p>

                <div className="p-4 mb-8 overflow-x-auto text-sm text-gray-700 bg-[#FFF9F9] border border-[#F4EBE9] rounded-lg font-mono text-left">
                    <p className="font-semibold text-[#A0635C] mb-1">Error Details:</p>
                    {error.message}
                </div>

                <button
                onClick={resetErrorBoundary}
                className="w-full sm:w-auto px-8 py-3 font-bold text-white transition-all duration-300 rounded-lg shadow-md bg-[#A0635C] hover:bg-[#8d5850] hover:shadow-lg"
                >
                    Try to Refresh
                </button>

                <p className="mt-6 text-sm text-gray-500">
                    If this keeps happening, there may be a network issue.
                </p>
            </div>
        </div>
    );
}

export default function AppErrorBoundary({ children }) {
    return (
        <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    );
}
