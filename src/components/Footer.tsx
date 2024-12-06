import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto">
      <div className="w-full px-6 md:px-8 py-6 flex flex-col md:flex-row items-center md:items-end md:justify-between text-sm md:text-lg mt-12">
        <div className="mb-3 md:mb-0">
          <h3 className="text-4xl text-center md:text-start text-gray-200 font-semibold">Shubham Sonawane</h3>
        </div>

        <div className="">
          <div className="flex justify-center md:justify-end flex-row gap-3 text-gray-400 text-4xl mb-2">
            <a href="#">
              <FaGithubSquare />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaGithubSquare />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-400 text-center md:text-start">copyright @ 2024 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
