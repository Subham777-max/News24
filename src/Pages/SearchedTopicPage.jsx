import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SearchedTopic from "../Components/SearchedTopic/SearchedTopic";

function SearchedTopicPage(){
    const { topic } = useParams();
    return(
        <>
            <Navbar />
            <SearchedTopic topic={topic} />
        </>
    )
}
export default SearchedTopicPage;