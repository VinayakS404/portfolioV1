import ProjectCardDetailed from "./ProjectCardDetailed";
import ProjectMoreNLessBtn from "./ProjectMoreNLessBtn";
import { bgBlurOverlay } from "../../data/style";

function ProjectSection() {
  return (
    <div className="relative w-full pt-50 flex flex-col items-center">
      <div className={`absolute ${bgBlurOverlay}`} />

      <div className="relative z-10 w-full flex flex-col items-center">
        <p className="text-white font-['Anton'] text-[45px] md:text-6xl w-full max-w-2xl leading-tight">
          Current&nbsp;
          <span className="text-blue-500 font-bold block md:inline">
            technologies
          </span>
        </p>
        <p className="text-gray-300 max-w-6xl pt-5 md:pt-10 text-base md:text-[19px]">
          I am currently pursuing
          <span className="text-blue-500 font-bold">
            &nbsp;Bachelor of Computer Applications (BCA)&nbsp;
          </span>
          while learning
          <span className="text-blue-500 font-bold">
            &nbsp;Java full-stack&nbsp;
          </span>
          development alongside my studies. These are the technologies I'm
          currently working with as I continue building projects and improving
          my
          <span className="text-blue-500 font-bold">
            &nbsp;practical skills&nbsp;
          </span>
        </p>

        <ProjectMoreNLessBtn />

        <div className="mb-200">
          <ProjectCardDetailed />
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
