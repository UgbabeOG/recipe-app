import React from "react";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 w-full shadow-md bg-slate-800">
        <h1 className="p-4 text-3xl font-thin text-center text-green-200 lg:font-bold animate-pulse ">
          Choco's Ingredient Finder
        </h1>
      </div>{" "}
      <div className="">
        {" "}
        <p className="w-[80%] sm:w-[50%] lg:text-lg m-auto pt-5 text-sm text-center text-slate-500">
          Enter what you have eaten, like "coffee and croissant" or "chicken
          enchilada" to see how it works. We have accurate data tens of
          thousands of foods, including international dishes.
        </p>
      </div>
    </>
  );
};

export default Header;
