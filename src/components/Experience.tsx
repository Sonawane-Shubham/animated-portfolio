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
              className=" w-full border border-purple-600 p-4 md:p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold mb-1">
                {experience.position}
              </h2>
              <h2 className="text-gray-200 text-xl font-semibold mb-1">
                {experience.company}
              </h2>
              <p className="text-gray-400 mb-2">{experience.period}</p>
              <p className="text-gray-400 mb-3">{experience.description}</p>

              <p className="text-gray-400">
                <span className="text-gray-300">Tech : </span>
                {experience.tech.map((item: string, index: number) => (
                  <>
                    <span className="text-gray-300">{item}</span>
                    {index < experience.tech.length && (
                      <span className="text-gray-300 mx-1">|</span>
                    )}
                  </>
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
