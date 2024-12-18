import { motion } from "framer-motion";
import Reveal from "./Reveal";

const educations = [
  {
    collegeName: "P E S College of engineering Aurangabad",
    degreeName: "B.Tech in computer science and engineering",
    period: "June 2020 - June 2023",
    grade: "8.69 CGPA",
  },
  {
    collegeName: "Government Polytechnic Aurangabad",
    degreeName: "Diploma in information technology (IT)",
    period: "August 2017 - May 2020",
    grade: "82.06%",
  },
];

const Education = () => {
  return (
    <div className="max-w-[1200px] px-4 md:px-10 mx-auto" id="#education">
      <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold text-gray-200  mt-12 mb-10 md:mb-12">
        Education
      </h2>
      <motion.div className="w-full" initial="hidden" animate="visible">
        {educations.map((education, index) => (
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
              <h2 className="text-gray-200 text-xl font-bold">{`${education.degreeName}`}</h2>
              <p className="text-gray-300">{education.collegeName}</p>
              <p className="text-base text-gray-300">{education.period}</p>
              <p className="text-base text-gray-300">
                Grade : {education.grade}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
