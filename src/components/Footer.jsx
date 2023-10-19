import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bottom-0 fixed left-0 w-full bg-sky-800 flex justify-center p-4 text-slate-300">
      <FaCopyright />JolofCodes {new Date().getFullYear()} All rights reserved.
    </div>
  );
};

export default Footer;
