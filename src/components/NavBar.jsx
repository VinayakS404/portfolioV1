function NavBar() {
  return (
    <>
      <nav className="hidden md:flex h-[30%] w-full justify-end  text-xl mt-[calc(100%-97%)] mr-50 ">
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Skills</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className=" flex md:hidden h-[20%] w-full">
        <div className="h-15 text-[#83848b] bg-[#212223] w-full">working on it'</div>
      </div>
    </>
  );
}
export default NavBar;
