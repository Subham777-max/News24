import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-6 text-gray-800 bg-[#F7E0DA]">
            <div className="w-full max-w-lg p-8 text-center bg-white border border-gray-300 shadow-lg rounded-2xl">
                <h2 className="mb-3 text-3xl font-extrabold text-[#E63946] drop-shadow-sm">
                    Oops! Something went wrong.
                </h2>

                <p className="mb-6 text-gray-700">
                    We’re having trouble loading the news right now. Please try again in a moment.
                </p>

                <div className="p-3 mb-6 overflow-x-auto text-sm text-gray-600 bg-[#FFF4F2] border border-[#F8C1B0] rounded-md font-mono">
                    {error.message}
                </div>

                <button
                onClick={resetErrorBoundary}
                className="px-6 py-2 font-semibold text-white transition-all duration-300 rounded-md shadow-sm bg-[#E63946] hover:bg-[#c72f3b] hover:scale-[1.02]"
                >
                    Refresh News
                </button>

                <p className="mt-6 text-sm text-gray-500">
                    Need help? Try reloading the page or check your internet connection.
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
