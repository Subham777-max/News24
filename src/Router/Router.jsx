import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
const HomePage = lazy(() => import("../Pages/HomePage"));
const NewsDetailsPage = lazy(() => import("../Pages/NewsDetailsPage"));

function Router(){
    return(
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/News-Details/:id" element={<NewsDetailsPage />} />
                </Routes>
            </Suspense>
        </>
    )
}
export default Router;