import React, { useContext } from "react";
import { NewsContext } from "../context/NewsProvider";

const Latest = () => {
  const { scienceHeadlines } = useContext(NewsContext);

  return (
    <div className="container py-3 px-5 mt-10">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 place-items-center">
        {scienceHeadlines.slice(3, 5).map((scienceHeadline, index) => (
          <figure
            className="relative h-[100%] cursor-pointer "
            key={index}
            onClick={() => (window.location.href = scienceHeadline.url)}
          >
            <div className="relative h-[100%]">
              <img
                className="rounded-md backdrop-filter backdrop-brightness-200 h-[100%] shadow-md"
                src={scienceHeadline.urlToImage}
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
            </div>

            <figcaption className="absolute bottom-5 left-5">
              <p className="text-secondary font-normal text-sm">
                {new Date(scienceHeadline.publishedAt).toLocaleDateString(
                  "en-CA"
                )}
              </p>
              <h3 className="font-bold text-main line-clamp-2 w-[70%]">
                {scienceHeadline.title}
              </h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Latest;
