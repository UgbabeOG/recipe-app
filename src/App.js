import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import { useAuth } from "./context/SearchContext";

export default function App() {
  const { darkMode } = useAuth();
  return (
    <div className={darkMode ? "dark" : "bg-slate-50 h-screen"}>
      <Header />
      <SearchBar />
      <RecipeCard />
      <Footer />
    </div>
  );
}
