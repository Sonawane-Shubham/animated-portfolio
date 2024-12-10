import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto">
      <div className="w-full px-4 md:px-10 py-6 flex flex-col md:flex-row items-center md:items-end md:justify-between text-sm md:text-lg mt-12">
        <div className="mb-3 md:mb-0">
          <a
            href="#"
            className="text-2xl font-medium overflow-hidden flex items-center"
          >
            <img
              src="/ss_logo.png"
              alt="logo"
              className="w-10 h-10 border border-purple-500 rounded-full"
            />
          </a>
        </div>

        <div className="">
          <div className="flex justify-center md:justify-end flex-row gap-3 text-gray-400 text-3xl mb-2">
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
          <p className=" text-lg text-gray-400 text-center md:text-start">
            copyright @ 2024 All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
