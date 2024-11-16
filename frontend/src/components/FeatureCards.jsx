import React from "react";

const FeatureCards = ({ name, title, description, date, image, link }) => {
  return (
    <div
      className="grid grid-cols-3 place-items-center cursor-pointer h-full"
      onClick={() => (window.location.href = link)}
    >
      <div className="col-span-2 h-full max-w-80">
        <h3 className="font-bold text-lg text-headline mb-3 line-clamp-2 mb:line-clamp-none">
          {title}
        </h3>
        <p className="line-clamp-2 text-headline font-normal text-sm max-w-xs mb-3">
          {description}
        </p>
        <div className="flex items-center gap-5">
          <p className="text-sm font-bold text-tertiary">{name}</p>
          <p>|</p>
          <p className="text-sm font-semibold text-secondary">{date}</p>
        </div>
      </div>
      <div className="col-span-1 h-[100%]">
        <img className="shadow-lg rounded-md h-[100%]" src={image} alt="" />
      </div>
    </div>
  );
};

export default FeatureCards;
