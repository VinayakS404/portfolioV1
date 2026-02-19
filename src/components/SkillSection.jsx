import html from "../assets/html-logo.svg";
import css from "../assets/css-logo.svg";
import js from "../assets/js-logo.svg";
import react from "../assets/react-logo.svg";
import tailwind from "../assets/tailwind-logo.svg";
import figma from "../assets/figma-logo.svg";
function SkillSection() {
  return (
    <>
      <div className="pb-100 w-100 mt-50 flex flex-col px-30 ">
        <div>
          <p className="text-white font-['Anton'] text-6xl w-130 ">
            Current
            <span className="text-blue-500 font-bold">technologies</span>
          </p>
          <p className="text-gray-300 w-300 pt-10 text-[19px]">
            I’m currently pursuing a  
            <span className="text-blue-500 font-bold">
               &nbsp;Bachelor of Computer Applications (BCA)&nbsp;
            </span>
            while learning
            <span className="text-blue-500 font-bold">&nbsp;Java full-stack&nbsp;</span>
            development alongside my studies. These are the technologies I’m
            currently working with as I continue building projects and improving
            my
            <span className="text-blue-500 font-bold">&nbsp;practical skills&nbsp;</span>
          </p>
        </div>
        <div>
          <p className="text-white mt-20 font-['Anton'] text-4xl">Front-end</p>
          <p className="text-gray-300 mt-5 w-300 text-text-[19px]">
            The part of a website users see and interact with, including layout,
            design, and basic interactivity
          </p>
          <div className="grid grid-cols-4 gap-x-80 gap-y-10 mt-10">
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#6d4c2b] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={html} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">HTML</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#472f57] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={css} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">CSS</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#525222] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={js} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">JS</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#32555e] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={react} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">React.js</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[hsl(240,8%,21%)] rounded-md flex items-center px-3">
              <div className="bg-[#32555e] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={tailwind} alt="Html icon" className="h-6" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">Tailwind</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#305522] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={figma} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">Figma</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#6d4c2b] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={html} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">HTML</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#6d4c2b] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={html} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">HTML</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
          </div>
        </div> <div>
          <p className="text-white mt-20 font-['Anton'] text-4xl">Back-end</p>
          <p className="text-gray-300 mt-5 w-300 text-text-[19px]">
            The part of a website that works behind the scenes, handling server logic, databases, and data processing
          </p>
          <div className="grid grid-cols-4 gap-x-80 gap-y-10 mt-10">
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#6d4c2b] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={html} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">HTML</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#472f57] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={css} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">CSS</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            <div className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3">
              <div className="bg-[#525222] h-14 w-14 flex items-center justify-center rounded-sm ">
                <img src={js} alt="Html icon" className="h-10" />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-white font-bold">JS</p>
                <p className="text-gray-300 text-sm">Structure of web pages</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}
export default SkillSection;
