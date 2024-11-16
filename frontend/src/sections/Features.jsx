import React, { useContext } from "react";
import FeatureCards from "../components/FeatureCards";
import { NewsContext } from "../context/NewsProvider";

const Features = () => {
  const { topHeadlines } = useContext(NewsContext);

  return (
    <div className="container  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-gray-200 py-12 px-5">
        {topHeadlines.slice(0, 1).map((topHeadline, index) => (
          <div className="flex flex-col gap-3 " key={index}>
            <div className="flex items-center gap-1">
              <div className="flex flex-col">
                <p className="text-sm font-bold text-headline">
                  {topHeadline.author}
                </p>
                <p className="text-sm font-medium text-secondary">Author</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 cursor-pointer"
              onClick={() => (window.location.href = topHeadline.url)}
            >
              <h3 className="text-4xl font-bold text-headline">
                {topHeadline.title}
              </h3>
              <div className="flex items-center gap-5">
                <p className="text-sm font-bold text-tertiary">
                  {topHeadline.source.name}
                </p>
                <p>|</p>
                <p className="text-sm font-semibold text-secondary">
                  {new Date(topHeadline.publishedAt).toLocaleDateString(
                    "en-CA"
                  )}
                </p>
              </div>

              <img
                className="rounded-lg shadow-xl"
                src={topHeadline.urlToImage}
                alt=""
              />
            </div>
          </div>
        ))}

        <div className="grid grid-rows-3 gap-5">
          {topHeadlines.slice(1, 4).map((topHeadline, index) => (
            <FeatureCards
              key={index}
              title={topHeadline.title}
              name={topHeadline.source.name}
              description={topHeadline.description}
              date={new Date(topHeadline.publishedAt).toLocaleDateString(
                "en-CA"
              )}
              image={topHeadline.urlToImage}
              link={topHeadline.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
