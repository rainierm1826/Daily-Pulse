import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <Routes>
        <Route element={<Search />} path="/search" />
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
