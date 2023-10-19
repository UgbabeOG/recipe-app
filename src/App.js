import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
// import dotenv from "dotenv";
// require("dotenv").config();

export default function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <RecipeCard />
      <Footer />
    </>
  );
}
