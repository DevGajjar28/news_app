import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonGroup from "../components/ButtonGroup";
import SearchBar from "../components/SearchBar";
import { fetchArticles, searchArticles, setPage } from "../redux/articlesSlice";

function Home() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const articleStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  const page = useSelector((state) => state.articles.page);
  const [visibleArticles, setVisibleArticles] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        dispatch(searchArticles({ query: searchQuery, page }));
      } else {
        dispatch(fetchArticles({ category: selectedCategory, page }));
      }
    };
    fetchData();
  }, [dispatch, selectedCategory, searchQuery, page]);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 9);
  };

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <SearchBar onSearch={setSearchQuery} />
      <ButtonGroup setSelectedCategory={setSelectedCategory} />
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {articleStatus === "loading" && <div>Loading...</div>}
        {articleStatus === "failed" && <div>{error}</div>}
        {articles.length === 0 && articleStatus === "succeeded" && (
          <div className="text-center text-gray-600">
            Sorry, no results found
          </div>
        )}
        {articles.slice(0, 1).map((article, index) => (
          <Link
            key={index}
            to={`/article/${encodeURIComponent(article.url)}`}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={article.urlToImage || "https://via.placeholder.com/480x360"}
              alt={article.title}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {article.title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <p>{article.description}</p>
            </div>
          </Link>
        ))}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(1, visibleArticles + 1).map((article, index) => (
            <Link
              key={index}
              to={`/article/${encodeURIComponent(article.url)}`}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={
                  article.urlToImage || "https://via.placeholder.com/480x360"
                }
                alt={article.title}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {article.title}
                </h3>
                <span className="text-xs dark:text-gray-600">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
                <p>{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={handlePreviousPage}
            className="px-4 py-2 mx-2 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            className="px-4 py-2 mx-2 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
