import mapIcon from "../assets/maps.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import mailIcon from "../assets/email.png";
import NavBar from "./NavBar";
function HeroSection() {
  return (
    <div className=" h-screen max-h-200  flex flex-col  items-center text-white px-8">
      <NavBar />
      <div className=" h-[60%] flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-1">
          <span className="h-2 w-2 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3  bg-[#55ff00] rounded-full translate-y-0.5"></span>
          <p className="  text-sm  md:text-md lg:text-lg">available for work</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-7">
          <p className="font-['Anton'] text-6xl lg:text-7xl w-full md:w-160  text-center">
            <span className="text-blue-500">Frontend&nbsp;</span>Dev Leveling Up
            to
            <span className="text-blue-500">&nbsp;Full-Stack</span>
          </p>
          <p className="text-center text-sm  md:text-xl lg:text-2xl text-gray-300">
            I&#39;m
            <span className="text-blue-500 font-bold">&nbsp;Vinayak S</span>,
            building web experiences while pursuing my BCA
          </p>
        </div>
      </div>
      <div className="  h-[30%]  flex flex-col sm:flex-row  items-center sm:items-end justify-center text-2xl gap-3 md:gap-8 mb-[calc(100%-97%)] ">
        <div className="hidden md:flex items-center justify-center gap-1">
          <img src={mapIcon} alt="pin icon" className=" h-4 md:h-5 " />
          <p className="text-center text-sm  md:text-xl lg:text-2xl">
            Kerala, India
          </p>
        </div>{" "}
        <div className="flex gap-4 ">
          <a
            href="https://github.com/VinayakS404"
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <img src={githubIcon} alt="github icon" className=" h-10  md:h-9" />
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

          <a className="shrink-0">
            <img src={mailIcon} alt="github icon" className=" h-10  md:h-9" />
          </a>
        </div>
        <div className="flex gap-10  " >
          <a href="">
            <p className="text-center   text-sm  md:text-xl lg:text-2xl">
              Download CV
            </p>
          </a>
          <div className="md:hidden flex items-center justify-center gap-1">
            <img src={mapIcon} alt="pin icon" className=" h-3 md:h-5 " />
            <p className="text-center text-sm  md:text-xl lg:text-2xl">
              Kerala, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
