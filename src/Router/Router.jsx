import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
const HomePage = lazy(() => import("../Pages/HomePage"));
const NewsDetailsPage = lazy(() => import("../Pages/NewsDetailsPage"));
const AboutPage= lazy(()=> import("../Pages/AboutPage"));
const SearchedTopicPage= lazy(()=> import("../Pages/SearchedTopicPage"));

function Router(){
    return(
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/About" element={<AboutPage />} />
                    <Route path="/News-Details/:id" element={<NewsDetailsPage />} />
                    <Route path="/Topics/:topic" element={<SearchedTopicPage />} />
                </Routes>
            </Suspense>
        </>
    )
}
export default Router;