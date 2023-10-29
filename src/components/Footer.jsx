import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 flex justify-center w-full h-10 p-4 text-teal-400 dark:bg-sky-950 bg-slate-50 dark:text-teal-300">
      <FaCopyright />
     <p className="mb-4"> JolofCodes {new Date().getFullYear()} All rights reserved.</p>
    </div>
  );
};

export default Footer;
