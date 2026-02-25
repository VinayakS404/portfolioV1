import mapIcon from "../assets/maps.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import mailIcon from "../assets/email.png";
import NavBar from "./NavBar";
function HeroSection() {
  return (
    <>
      <div className="h-screen max-h-200  flex flex-col  items-center text-white">
        <NavBar />
        <div className=" h-[40%] flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-1">
            <span className="h-3 w-3 bg-[#55ff00] rounded-full translate-y-0.5"></span>
            <p className=" text-lg">available for work</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-7">
            <p className="font-['Anton'] text-7xl w-160 text-center">
              <span className="text-blue-500">Frontend&nbsp;</span>Dev Leveling
              Up to
              <span className="text-blue-500">&nbsp;Full-Stack</span>
            </p>
            <p className="text-center text-2xl text-gray-300">
              I&#39;m
              <span className="text-blue-500 font-bold">&nbsp;Vinayak S</span>,
              building web experiences while pursuing my BCA
            </p>
          </div>
        </div>
        <div className="  h-[30%] flex items-end justify-center  text-2xl gap-8 mb-[calc(100%-97%)]">
          <div className="flex items-center justify-center gap-1">
            <img src={mapIcon} alt="pin icon" className="h-5" />
            <p>Kerala, India</p>
          </div>{" "}
          <div className="flex gap-4">
            <a
              href="https://github.com/VinayakS404"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="github icon" className="h-9" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinayak-s-390319369/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="github icon" className="h-9" />
            </a>
            <img src={mailIcon} alt="github icon" className="h-9" />
          </div>
          <a href="">
            <p>Download CV</p>
          </a>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
