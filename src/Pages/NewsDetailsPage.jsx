import { lazy, Suspense } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Loader from "../Components/Loader/Loader";
const NewsDetails = lazy(() => import("../Components/NewsDetails/NewsDetails"));

function NewsDetailsPage(){
    return(
        <>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <NewsDetails />
            </Suspense>
        </>
    )
}
export default NewsDetailsPage;