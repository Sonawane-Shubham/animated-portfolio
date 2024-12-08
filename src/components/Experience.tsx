import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    position: "Software Engineer",
    company: "Aperra Software Solution, Nagpur, Maharashtra",

    period: "Jan 2024 - Present",
    tech: ["HTMLC", "CSS", "Tailwind Css", "JS", "ReactJS", "Redux", "NextJS"],
    description: "Description of your experience in this company.",
  },
  {
    position: "Software Engineer",
    company: "Aperra Software Solution, Nagpur, Maharashtra",
    period: "Jan 2024 - Present",
    tech: ["HTMLC", "CSS", "Tailwind Css", "JS", "ReactJS", "Redux", "NextJS"],
    description: "Description of your experience in this company.",
  },
];

const Experience = () => {
  return (
    <div className="max-w-[1200px] px-4 md:px-10 mx-auto">
      <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold text-gray-200  mt-12 mb-10 md:mb-12">
        Experience
      </h2>
      <motion.div className="w-full mb-16" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" w-full border border-purple-600 p-4 md:p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-xl font-bold">
                {experience.position}
              </h2>
              <h2 className="text-gray-200 text-lg font-semibold mb-1">
                {experience.company}
              </h2>
              <p className="text-base text-gray-400 mb-2">{experience.period}</p>
              <p className="text-base text-gray-400 mb-3">{experience.description}</p>

              <p className="text-base text-gray-400">
                <span className="text-gray-400">Skills : </span>
                {experience.tech.map((item: string, index: number) => (
                 
                    <span key={index} className="text-gray-400 border border-purple-400 px-2 py-1 rounded-sm mr-2">{item}</span>
                   
                
                ))}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
