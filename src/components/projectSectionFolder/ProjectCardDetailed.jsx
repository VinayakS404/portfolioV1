import { useState, useEffect } from "react";
import githubBlack from "../../assets/github-black.png";
import www from "../../assets/www-icon.png";
import { projects } from "../../data/projects";
function ProjectCardDetailed({ setIsDetailed, isDetailed }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(isMobile);
  if (isMobile) {
    setIsDetailed(false);
  }
  const projectDetailed = projects.map((singleProject) => {
    return (
      <div
        className=" w-screen h-100 flex  justify-center mt-10"
        key={singleProject.id}
      >
        <div className=" w-290 h-full relative  flex ">
          <p className="absolute font-['Anton']  text-6xl top-6 ml-3 text-white ">
            {singleProject.name}
          </p>
          <div className="w-130 h-90 bg-white right-0 my-auto inset-y-0 absolute rounded-2xl   "></div>
          <div
            className="absolute w-180 h-35 border border-[#42424f]  bg-[rgb(49,49,57)]/70 backdrop-blur-sm rounded-md flex items-center justify-center
         top-41  z-10 "
          >
            <p className="p-5 text-white">{singleProject.desc}</p>
          </div>
          <div className=" absolute z-10 flex gap-2 justify-start  top-28 ml-3">
            {singleProject.technologies.map((tech) => {
              return (
                <div className=" px-7 py-0.5 rounded-sm text-white bg-blue-500 font-bold">
                  {tech}
                </div>
              );
            })}
          </div>
          <div className=" absolute z-10 flex gap-5 justify-start  bottom-7 ml-3">
            {singleProject.website && (
              <a href={singleProject.websiteLink} target="_blank">
                <div className=" w-40 h-12 rounded-sm bg-white flex items-center justify-center gap-3">
                  <div className="flex items-center justify-center gap-3">
                    <img src={www} className="h-7" alt="github icon" />
                    <p className="font-bold text-[20px]">Website</p>
                  </div>
                </div>
              </a>
            )}
            <a href={singleProject.sourceLink} target="_blank">
              <div className=" w-40 h-12 rounded-sm bg-white flex items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <img src={githubBlack} className="h-7" alt="github icon" />
                  <p className="font-bold text-[20px]">Source</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  });
  const projectLessDetailed = (
    <div className="grid grid-cols-1 min-[850px]:grid-cols-2 min-[1220px]:grid-cols-3  gap-y-5 gap-x-5  justify-items-center items-center p-5 rounded-3xl mt-10 border-t border-l   ">
      {projects.map((singleProject) => {
        return (
          <div
            className=" min-w-90  md:w-90 hover:scale-105 border-t border-l hover:border border-[#55575c] hover:border-[#b9becb] bg-[rgb(49,49,57)]/50 backdrop-blur-sm  rounded-xl flex flex-col gap-3 items-center justify-around py-4 transition-all duration-200"
            key={singleProject.id}
          >
            <div className="bg-white h-50 w-81 rounded-2xl"></div>
            <div className="flex flex-col w-81  ">
              <p className="text-2xl text-white font-medium">
                {singleProject.name}
              </p>
              <div className={` ${!isMobile && 'h-20' }`}>
                <p className={`${!isMobile &&'line-clamp-3' } text-gray-300 text-sm pt-4`}>
                  {singleProject.desc}
                </p>
              </div>
            </div>
            <div className="flex gap-2 w-81">
              <div className="bg-blue-500   px-3 py-0.5 text-[#ffffff] font-medium rounded-sm ">
                {singleProject.technologies[0]}
              </div>
              <div className="bg-blue-500   px-3 py-0.5 text-[#ffffff] font-medium rounded-sm ">
                {singleProject.technologies[1]}
              </div>
              <div className="bg-blue-500   px-3 py-0.5 text-[#ffffff] font-medium rounded-sm">
                {singleProject.technologies[2]}
              </div>
              {singleProject.technologies.length - 3 !== 0 && (
                <div className="bg-blue-500   px-3 py-0.5 text-[#ffffff] font-medium rounded-sm">
                  +{singleProject.technologies.length - 3}
                </div>
              )}
            </div>
            <div>
              <div>
                <button>
                  <a href={singleProject.websiteLink} target="_blank">
                    <div className=" w-40 h-10 rounded-sm bg-white flex items-center justify-center gap-3">
                      <div className="flex items-center justify-center gap-3">
                        <img src={www} className="h-5" alt="github icon" />
                        <p className="font-bold text-[15px]">Website</p>
                      </div>
                    </div>
                  </a>
                </button>{" "}
                <button>
                  <a href={singleProject.sourceLink} target="_blank">
                    <div className=" w-40 h-10 rounded-sm bg-white flex items-center justify-center gap-3">
                      <div className="flex items-center justify-center gap-3">
                        <img
                          src={githubBlack}
                          className="h-5"
                          alt="github icon"
                        />
                        <p className="font-bold text-[15px]">Source</p>
                      </div>
                    </div>
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return isDetailed ? projectDetailed : projectLessDetailed;
}
export default ProjectCardDetailed;
