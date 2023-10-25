import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";


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
