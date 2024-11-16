import { FaLongArrowAltRight } from "react-icons/fa";
import ArticleCards from "../components/ArticleCards";
import { NewsContext } from "../context/NewsProvider";
import React, { useContext, useState } from "react";

const Articles = () => {
  const { technologyHeadlines } = useContext(NewsContext);
  const [showCount, setShowCount] = useState(4);

  const handleShowCount = () => {
    setShowCount((prev) => prev + 8);
  };

  return (
    <div className="container py-3 px-5">
      <div className="grid gap-5">
        <div className="flex justify-between items-center">
          <h4 className="text-headline text-4xl font-bold">
            Latest Technologies
          </h4>
          <button
            type="button"
            className="flex items-center gap-2 text-tertiary text-lg font-bold"
            onClick={() => handleShowCount()}
          >
            Show More
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-5">
          {technologyHeadlines
            .slice(0, showCount)
            .map((technologyHeadline, index) => (
              <ArticleCards
                key={index}
                link={technologyHeadline.url}
                image={technologyHeadline.urlToImage}
                title={technologyHeadline.title}
                date={new Date(
                  technologyHeadline.publishedAt
                ).toLocaleDateString("en-CA")}
                author={technologyHeadline.author}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
