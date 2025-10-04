import { useLocation } from "react-router-dom";

const formatContent = (content) => {
  if (!content) return null;

  const cleanedContent = content.replace(/\[\d+\s?chars\]/g, '').trim();

  
  const paragraphs = cleanedContent.split(/\s*\n\s*\n\s*/).filter(p => p.length > 0);

  return paragraphs.map((paragraph, index) => (
    <p key={index} className="mb-6 text-lg leading-relaxed text-gray-800">
      {paragraph}
    </p>
  ));
};

function NewsDetails() {
  const location = useLocation();
  const { article } = location.state || {};

  if (!article) return <p className="mt-20 text-center text-gray-500">No article found</p>;

  return (
    <section className="flex flex-col mt-[5.5vh] items-center w-full min-h-screen pt-24 pb-16 text-gray-900 ">
      <div className="flex flex-col w-full max-w-5xl px-4 md:px-6">

        <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl text-primary">
          {article.title}
        </h1>

        {article.description && (
          <p className="pl-4 mb-8 text-xl italic font-medium leading-relaxed text-gray-600 border-l-4 border-accent">
            {article.description}
          </p>
        )}
        
        <div className="pb-4 mb-10 text-sm text-gray-500 border-b">
            {article.source && (
                <span className="mr-4 font-semibold">
                    Source: {article.source.name}
                </span>
            )}
            {article.publishedAt && (
                <span>Published: {new Date(article.publishedAt).toLocaleDateString()}</span>
            )}
        </div>

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto max-h-[32rem] object-cover mb-10 shadow-lg"
          />
        )}
        
        <div className="text-base leading-relaxed text-gray-900">
          {article.content 
            ? formatContent(article.content)
            : <p className="italic text-gray-500">Full article content not available at the moment.</p>}
        </div>

        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 text-lg font-semibold text-red-600 transition-colors duration-300 hover:text-red-700"
          >
            Read the original source article →
          </a>
        )}
      </div>
    </section>
  );
}

export default NewsDetails;
