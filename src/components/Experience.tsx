import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Aperra Software Solution, Nagpur, Maharashtra",
    period: "Jan 2024 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Aperra Software Solution, Nagpur, Maharashtra",
    period: "Jan 2024 - Present",
    description: "Description of your experience in this company.",
  },
];

const Experience = () => {
  return (
    <div className="max-w-[1200px] px-6 md:px-10 mx-auto">
      <h1 className="text-4xl text-gray-200 text-center md:text-start font-bold  mb-12">
        Experience
      </h1>
      <motion.div className="w-full mb-16" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" w-full border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold mb-1">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
