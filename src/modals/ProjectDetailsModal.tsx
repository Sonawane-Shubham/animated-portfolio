
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { AiOutlineGlobal } from "react-icons/ai";

type TPtojectDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  projectData: any;
};

const ProjectDetailsModal: React.FC<TPtojectDetailsModalProps> = ({
  isOpen,
  onClose,
  projectData,
}) => {
  console.log("projectData data", projectData);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal Form"
      ariaHideApp={false}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "99",
        },
        content: {
          position: "static",
          maxWidth: "450px",
          maxHeight: "90%",
          margin: "16px 16px",
          padding: 0,
          border: "1px solid #a855f7",
          borderRadius: "8px",
        },
      }}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between py-3 px-2 bg-purple-500 text-white">
          <h2 className="text-xl md:text-2xl font-medium">
            {projectData?.title}
          </h2>
          <button
            className="flex items-center justify-center"
            onClick={onClose}
          >
            <IoClose className="w-7 h-7 " />
          </button>
        </div>
        <div className="">
          <div className="w-full p-4 cursor-pointer">
            <img
              src={projectData.img}
              alt={projectData.title}
              className="w-full h-52 object-cover rounded-md shadow-lg"
            />
            {projectData?.skills && projectData?.skills?.length && (
              <div className="flex items-center gap-2 flex-wrap mt-4">
                {projectData?.skills &&
                  projectData?.skills?.length &&
                  projectData?.skills?.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className=" text-sm text-white bg-purple-500 px-2 py-1 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            )}
          </div>
          <div className="w-full  p-4 pt-0 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-500 mb-2">
              {projectData.title}
            </h3>

            <p className="text-base text-gray-500 mb-4">
              {`${projectData?.description}
                    `}
            </p>
            <div className="flex items-center gap-4">
              <a href={projectData.links.site} className="">
                <button className="flex justify-center items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-gray-200 rounded-md transition-all duration-300">
                  view site <AiOutlineGlobal className="w-4 h-4 ml-1" />
                </button>
              </a>
              <a href={projectData.links.github} className="">
                <button className="flex justify-center items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-gray-200 rounded-md transition-all duration-300">
                  github <FaGithub className="w-4 h-4 ml-1" />
                </button>
              </a>
              {/* <button className="flex justify-center items-center px-4 py-3 bg-gray-500 hover:bg-gray-600 text-gray-300 rounded-md transition-all duration-300">
                 <IoMdMore className="w-4 h-4" />
                  </button> */}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
