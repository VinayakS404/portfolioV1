import mapIcon from "../assets/maps.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import mailIcon from "../assets/email.png";
import NavBar from "./NavBar";
function HeroSection() {
  return (
    <div className="max-h-200  flex flex-col  items-center text-white px-8 gap-35 md:gap-45">
      <NavBar />
      <div className=" h-[60%] flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 md:h-2.5 md:w-2.5 mb-1 md:mb-0  bg-[#55ff00] rounded-full translate-y-0.5"></span>
          <p className="  text-sm  md:text-md ">available for work</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="font-['Anton'] text-6xl  w-full md:w-160  text-center">
            <span className="text-blue-500">Frontend&nbsp;</span>Dev Leveling Up
            to
            <span className="text-blue-500">&nbsp;Full-Stack</span>
          </p>
          <p className="text-center text-sm  md:text-xl  text-gray-300">
            I&#39;m
            <span className="text-blue-500 font-bold">&nbsp;Vinayak S</span>,
            building web experiences while pursuing my BCA
          </p>
        </div>
      </div>
      <div className="  h-[30%]  flex flex-col sm:flex-row  items-center sm:items-end justify-center text-2xl gap-3 md:gap-8 mb-[calc(100%-97%)] ">
        <div className="flex flex-col items-center  bg-[#212223]  p-5 rounded-2xl md:bg-transparent">
          <div className=" ">
            <div className=" flex gap-8 md:hidden">
              <a
                href="https://github.com/VinayakS404"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={githubIcon}
                  alt="github icon"
                  className=" h-10  md:h-9"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vinayak-s-390319369/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={linkedinIcon}
                  alt="github icon"
                  className="h-10  md:h-9"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vinayak-s-390319369/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={mailIcon}
                  alt="github icon"
                  className="h-10  md:h-9"
                />
              </a>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <div className="flex items-center gap-1">
              <img src={mapIcon} alt="pin icon" className=" h-3 md:h-5 " />
              <p className="text-center text-sm  md:text-xl ">Kerala, India</p>
            </div>
            <div className=" md:flex gap-3 hidden">
              <a
                href="https://github.com/VinayakS404"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={githubIcon}
                  alt="github icon"
                  className=" h-10  md:h-9"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vinayak-s-390319369/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={linkedinIcon}
                  alt="github icon"
                  className="h-10  md:h-9"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vinayak-s-390319369/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={mailIcon}
                  alt="github icon"
                  className="h-10  md:h-9"
                />
              </a>
            </div>

            <p className="text-center   text-sm  md:text-xl ">Download CV</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
