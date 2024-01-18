import React, { lazy, Suspense } from "react";
import { useAuth } from "./context/SearchContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
const SearchBar = lazy(() => import("./components/SearchBar"));
const RecipeCard = lazy(() => import("./components/RecipeCard"));

export default function App() {
  const { darkMode } = useAuth();
  return (
    <Suspense fallback={<div className="custom-loader"></div>}>
      <div className={darkMode ? "dark" : "bg-slate-50 h-screen"}>
        <Header />
        <SearchBar /> <RecipeCard />
        <Footer />
      </div>
    </Suspense>
  );
}
