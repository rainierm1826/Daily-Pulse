import React, { useEffect, useState } from "react";
import ArticleCards from "../components/ArticleCards";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const apiKey = "6364a5a9d4f74a58a6627fe248229c52";

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");

  const getResults = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`
    );

    setResults(response.data.articles);
  };

  useEffect(() => {
    getResults();
  }, [results]);

  return (
    <div className="container py-5 px-3">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {results.map((result, index) => (
          <ArticleCards
            key={index}
            author={result.author}
            title={result.title}
            date={result.publishedAt}
            image={result.urlToImage}
            link={result.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
