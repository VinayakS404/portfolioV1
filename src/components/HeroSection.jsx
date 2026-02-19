import mapIcon from "../assets/maps.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import mailIcon from "../assets/email.png";
function HeroSection() {
  return (
    <>
      <div className="h-screen  flex flex-col  items-center text-white">
        <div className="   h-[30%] w-full flex justify-end items-start text-xl gap-10 mt-[calc(100%-97%)] mr-50">
          <p>Home</p>
          <p>Skills</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
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
              I’m
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
            <img src={githubIcon} alt="github icon" className="h-9" />
            <img src={linkedinIcon} alt="github icon" className="h-9" />
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
