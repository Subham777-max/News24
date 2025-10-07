import { useContext } from "react";
import { AppContext } from "../../Context/CreateContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FavouritArticles() {
    const { objArr, setObjArr } = useContext(AppContext);
    const navigate=useNavigate();
    function handleClick(article){
        navigate(`/News-Details/${article.id}`, { state: { article } });
    }
    const handleDelete = (e,id) => {
        e.stopPropagation();
        const updatedArr = objArr.filter((ele) => ele.id !== id);
        setObjArr(updatedArr);
    };

    if (objArr.length === 0)
        return (
            <section className="flex flex-col items-center justify-center mt-[14.5vh] h-[80vh] text-center px-4">
                <p className="text-xl font-semibold text-gray-700">
                No Favourite Articles Found
                </p>
                <p className="mt-2 text-gray-500">
                You haven't saved any articles yet. Go back and add some!
                </p>
            </section>
        );

    return (
            <section className="mt-[15.5vh] px-4 md:px-8 mb-7">
                <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {objArr.map((article) => (
                    <article
                        key={article.id}
                        className="relative overflow-hidden transition-all duration-300 bg-white rounded-sm shadow-md hover:scale-[1.05] cursor-pointer"
                        onClick={()=>handleClick(article)}
                    >
                        <button
                        onClick={(e) => handleDelete(e,article.id)}
                        className="absolute text-red-500 transition-colors duration-200 top-2 right-2 hover:text-red-700"
                        title="Remove from favorites"
                        >
                            <FaTrash size={20} />
                        </button>

                        {article.image && (
                            <img
                                src={article.image}
                                alt={article.title}
                                className="object-cover w-full h-48"
                                loading="lazy"
                            />
                        )}
                        <section className="p-4">
                            <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                {article.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {article.description
                                ? article.description
                                : "No description available."}
                            </p>
                        </section>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default FavouritArticles;
