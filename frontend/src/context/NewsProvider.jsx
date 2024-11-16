import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const apiKey = "6364a5a9d4f74a58a6627fe248229c52";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [technologyHeadlines, setTechnologyHeadlines] = useState([]);
  const [scienceHeadlines, setScienceHeadlines] = useState([]);

  const getTopHeadlines = async () => {
    try {
      const phHeadlines = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=ph&apiKey=${apiKey}`
      );
      const phResult = phHeadlines.data;
      setTopHeadlines(phResult.articles);

      const technologyResponse = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`
      );
      const technologyResult = technologyResponse.data;
      setTechnologyHeadlines(technologyResult.articles);

      const scienceResponse = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`
      );
      const scienceResult = scienceResponse.data;
      setScienceHeadlines(scienceResult.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopHeadlines();
  }, []);

  return (
    <NewsContext.Provider
      value={{ topHeadlines, technologyHeadlines, scienceHeadlines }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNextContext = () => useContext(NewsContext);
