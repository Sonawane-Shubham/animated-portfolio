import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

import { FaGithub } from "react-icons/fa";

import { AiOutlineGlobal } from "react-icons/ai";

import Reveal from "./Reveal";
import ProjectDetailsModal from "../modals/ProjectDetailsModal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description:
      "A fullstack application built with Node.js and MongoDB A fullstack application built with Node.js and MongoDB  A fullstack application built with Node.js and MongoDB  A fullstack application built with Node.js and MongoDB  ",
    skills: ["HTML", "CSS", "JS", "React", "Redux"],
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Project #3",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #4",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "Project #5",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Project #3",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #4",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "Project #5",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

type TLinkType = {
  site: string;
  github: string;
};
type TProjectType = {
  title: string;
  img: string;
  description: string;
  tech?: string[];
  links: TLinkType;
};

const Project = () => {
  const [limit, setLimit] = useState<number>(6);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<TProjectType | null>(
    null
  );

  const handleCloseProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleOpenProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  console.log(selectedProject);
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 " id="portfolio">
      <h2 className="text-3xl text-center md:text-start font-bold text-gray-200  mt-12 mb-10 md:mb-12">
        Portfolio
      </h2>
      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects &&
          projects.length &&
          projects.slice(0, limit).map((project, index) => (
            <Reveal>
              <div
                key={index}
                className="max-w-sm justify-self-center border border-purple-600 rounded-md"
              >
                <div
                  className="w-full p-4 cursor-pointer"
                  onClick={() => {
                    handleOpenProjectModal(project);
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-52 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full  p-4 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-300 mb-4">
                    {`${project?.description?.slice(0, 180)}
                    `}
                    <span
                      className="text-purple-400 font-medium cursor-pointer "
                      onClick={() => {
                        handleOpenProjectModal(project);
                      }}
                    >
                      Read More ...
                    </span>
                  </p>
                  <div className="flex items-center gap-4">
                    <a href={project.links.site} className="">
                      <button className="flex justify-center items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-gray-300 rounded-md transition-all duration-300">
                        view site <AiOutlineGlobal className="w-4 h-4 ml-1" />
                      </button>
                    </a>
                    <a href={project.links.github} className="">
                      <button className="flex justify-center items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-gray-300 rounded-md transition-all duration-300">
                        github <FaGithub className="w-4 h-4 ml-1" />
                      </button>
                    </a>
                    {/* <button className="flex justify-center items-center px-4 py-3 bg-gray-500 hover:bg-gray-600 text-gray-300 rounded-md transition-all duration-300">
                 <IoMdMore className="w-4 h-4" />
                  </button> */}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
      </div>
      {projects && projects.length > 6 && (
        <div className="w-full flex items-center justify-center">
          <button
            disabled={limit >= projects.length}
            className="px-6 py-3 text-g border text-gray-200 border-purple-600  rounded-md cursor-pointer disabled:cursor-not-allowed  transition-all duration-300"
            onClick={() => setLimit((prev: number) => prev + 3)}
          >
            Load More
          </button>
        </div>
      )}

      {isModalOpen && (
        <ProjectDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseProjectModal}
          projectData={selectedProject}
        />
      )}
    </div>
  );
};

export default Project;
