import profilepic from "../assets/profpic.jpg";
import { TypeAnimation } from "react-type-animation";

// import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { IoMdCloudDownload } from "react-icons/io";
import { BsPersonCheckFill } from "react-icons/bs";
import { TbBrandLeetcode } from "react-icons/tb";

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto  mt-32 md:mt-40 px-4 md:px-10 relative  ">
      <div className="grid md:grid-cols-2 place-content-center md:place-content-start  gap-8">
        <div className="w-full flex md:hidden  justify-center items-center md:justify-end">
          <motion.img
            src={profilepic}
            className="w-80  h-80 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
        <motion.div
          className="text-center md:text-start"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-4xl text-3xl font-medium tracking-tight mb-1"
          >
            _hello I Am
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-purple-500 md:text-4xl text-3xl font-medium tracking-tight mb-1"
          >
            Shubham Sonawane
          </motion.p>
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-medium text-gray-400 text-2xl "
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className=" text-center md:text-start text-gray-300 max-w-[300px] md:max-w-[500px] mx-auto  md:mx-0  md:text-xl text-lg mb-4 mt-2"
          >
            A software developer with a passion for learning and creating
            ,software developer with a passion for learning and creating. with 1
            years of experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center md:items-start gap-y-4 my-4 md:mb-0"
          >
            <div className="flex gap-2 flex-row text-3xl md:text-4xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <TbBrandLeetcode />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineInstagram />
              </motion.a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/shubham_sonawane_resume_8551804947.pdf"
                download
                className=""
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                  }}
                  className="w-fit flex items-center justify-center px-4 py-3 z-10 cursor-pointer font-medium text-gray-200  border border-purple-400 rounded-md"
                >
                  Download CV <IoMdCloudDownload className="w-6 h-5 ml-2" />
                </motion.button>
              </a>
              <a href="" className="">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                  }}
                  className="w-fit flex items-center justify-center px-4 py-3 z-10 cursor-pointer font-medium text-gray-200  border border-purple-400 rounded-md"
                >
                  Hire Me
                  <BsPersonCheckFill className="w-5 h-4 mb-0.5 ml-2" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </motion.div>
        <div className="w-full hidden md:flex  justify-center items-center md:justify-end">
          <motion.img
            src={profilepic}
            className="w-80  h-80 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row flex-wrap text-7xl px-12 md:px-0 w-full justify-center items-center py-16"
      >
        <p className="text-gray-200 mr-0 md:mr-6 mb-3 md:mb-0">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>
    </div>
  );
};

export default Hero;
