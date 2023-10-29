import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { FaStarAndCrescent, FaSun } from "react-icons/fa";
import { logo } from "../assets/images";
const Header = () => {
  const { handleDarkMode, darkMode } = useContext(SearchContext);
  return (
    <>
      <div className="sticky top-0 z-10 flex justify-between w-full shadow-md place-items-center bg-slate-50 dark:bg-slate-700">
        <img
          src={logo}
          alt="website logo"
          className="h-8 ml-4 w-15 animate-pulse"
        />
        <div className="p-4">
          {darkMode ? (
           <FaSun
            onClick={handleDarkMode}
            className="text-3xl text-yellow-500"
          />
          ) : (
            <FaStarAndCrescent
              onClick={handleDarkMode}
              className="text-3xl text-gray-900 "
            /> 
          )}
        </div>
      </div>
      <div className="mt-2 mb-2">
        <p className="w-[80%] sm:w-[70%] lg:text-lg m-auto pt-5 text-sm text-center text-slate-500 leading-snug tracking-tight">
          Enter what you have eaten, like "coffee and croissant" or "chicken
          enchilada" to see how it works. We have accurate data tens of
          thousands of foods, including international dishes.
        </p>
      </div>
    </>
  );
};

export default Header;
