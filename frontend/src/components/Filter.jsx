import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = encodeURIComponent(query.trim());

    navigate(`/search?q=${q}`);
  };

  const handleKeyDown = (e) => {
    const q = encodeURIComponent(query.trim());

    if (e.key === "Enter") {
      navigate(`/search?q=${q}`);
    }
  };

  return (
    <div className="container py-5 px-3 bg-gray/30 backdrop-blur-md border-b-[1px] border-secondary sticky top-0 z-10 ">
      <form
        className="flex items-center justify-center gap-2"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search news..."
          className="bg-gray-200 p-2 rounded-md focus:outline-secondary text-headline text-sm w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button type="submit">
          <IoSearch className="text-2xl text-headline" />
        </button>
      </form>
    </div>
  );
};

export default Filter;
