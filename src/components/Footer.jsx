import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 flex justify-center w-full h-10 p-4 bg-sky-950 text-slate-300">
      <FaCopyright />
      JolofCodes {new Date().getFullYear()} All rights reserved.
    </div>
  );
};

export default Footer;
