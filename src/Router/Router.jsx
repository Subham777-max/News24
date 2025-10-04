import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NewsDetailsPage from "../Pages/NewsDetailsPage";

function Router(){
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/News-Details/:id" element={<NewsDetailsPage />} />
            </Routes>
        </>
    )
}
export default Router;