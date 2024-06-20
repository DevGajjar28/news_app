import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

function DetailPage() {
  const { articleId } = useParams();
  const articles = useSelector((state) => state.articles.items);
  const article = articles.find((a) => a.url === decodeURIComponent(articleId));

  if (!article) {
    return <div>Article not found</div>;
  }

  const relatedArticles = articles.filter(
    (a) => a.category === article.category && a.url !== article.url
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <img
        src={article.urlToImage || "https://via.placeholder.com/480x360"}
        alt={article.title}
        className="w-full h-64 object-cover my-6"
      />
      <div className="space-y-4">
        <p className="text-lg">{article.content}</p>
        <p className="text-lg">Description: {article.description}</p>
        <p className="text-lg">Author: {article.author || `unkown`} </p>
        <a href={article.url} className="text-lg text-blue-500">
          Source Link: {article.source.name}
        </a>
      </div>
      <h2 className="text-2xl font-bold mt-6">Related News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedArticles.map((related, index) => (
          <Link to={`/article/${encodeURIComponent(related.url)}`} key={index}>
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="text-xl font-semibold">{related.title}</h3>
              <img
                src={
                  related.urlToImage || "https://via.placeholder.com/480x360"
                }
                alt={related.title}
                className="w-full h-32 object-cover mt-2"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
