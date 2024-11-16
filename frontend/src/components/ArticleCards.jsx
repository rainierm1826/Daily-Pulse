import React from "react";

const ArticleCards = ({ author, title, date, image, link }) => {
  return (
    <figure
      className="grid gap-2 cursor-pointer place-items-center"
      onClick={() => (window.location.href = link)}
    >
      <img
        className="rounded-md shadow-md h-[200px] w-full"
        src={image}
        alt=""
      />
      <figcaption className="flex items-center gap-3">
        <h5 className="text-xs text-headline font-bold">{author}</h5>
        <p>|</p>
        <p className="text-xs font-normal text-secondary">{date}</p>
      </figcaption>
      <div>
        <h3 className="text-lg font-bold text-headline line-clamp-2">
          {title}
        </h3>
      </div>
    </figure>
  );
};

export default ArticleCards;
