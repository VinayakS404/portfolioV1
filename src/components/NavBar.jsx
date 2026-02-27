import hamburgerIcon from "../assets/hamburger.png";
function NavBar() {
  return (
    <>
      <nav className="hidden md:flex  h-[30%] w-full justify-end  text-xl mt-[calc(100%-97%)] mr-50 ">
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Skills</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-[#202021]/80 backdrop-blur-2xl flex items-center justify-end pr-5 border-b border-[#313136] z-50">
        <img className="h-7" src={hamburgerIcon} alt="hamburger icon" />
      </div>
    </>
  );
}
export default NavBar;
