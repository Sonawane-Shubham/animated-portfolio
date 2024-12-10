import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { navRoutes } from "../utils/data";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50 ">
      <div
        className="max-w-[1200px] mx-auto  flex  justify-between text-gray-200
        text-xl items-center px-4 md:px-10 h-20"
      >
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

        <ul className="text-lg hidden md:flex gap-8 z-10 cursor-pointer">
          {navRoutes &&
            navRoutes.length &&
            navRoutes.map((route) => (
              <li key={route.id}>
                <Link to={route.path} smooth={true} offset={50} duration={500}>
                  {route.label}
                </Link>
              </li>
            ))}
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={36} /> : <AiOutlineMenu size={32} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <div className="mt-20">
            <a
              href=""
              className="flex items-center justify-center overflow-hidden"
            >
              <img
                src="/ss_logo.png"
                alt="SS"
                className="w-16 h-16 border border-purple-400 rounded-full "
              />
            </a>
          </div>

          <ul className="font-semibold text-4xl space-y-8 mt-8 text-center">
            {navRoutes &&
              navRoutes.length &&
              navRoutes.map((route) => (
                <li key={route.id}>
                  <Link
                    to={route.path}
                    onClick={closeNav}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
