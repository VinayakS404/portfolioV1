import hamburgerIcon from "../assets/hamburger.png";
function NavBar() {
  return (
    <>
      <nav className="hidden md:flex fixed z-10 h-20 w-full  bg-[#202021]/60 backdrop-blur-xl items-center justify-end  text-xl ] pr-40 border-b border-[#313136] ">
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
