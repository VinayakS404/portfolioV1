function ProjectCard() {
  return (
    <div className=" w-screen h-100 flex  justify-center mt-20">
      <div className=" w-290 h-full relative  flex ">
        <p className="absolute font-['Anton']  text-6xl top-6 ml-3 text-white ">
          APPLE PIE
        </p>
        <div className="w-130 h-90 bg-white right-0 my-auto inset-y-0 absolute rounded-2xl   "></div>
        <div
          className="absolute w-180 h-35 border border-[#42424f]  bg-[rgb(49,49,57)]/70 backdrop-blur-sm rounded-md flex items-center justify-center
         top-41  z-10 "
        >
          <p className="p-5 text-white">
            adf I am curre the technologies I'm currently working with as I
            continue building projects and improving my practical skills I am
            currently pursuing Bachelor of Computer Applications (BCA) while
            learning Java full-stack development alongside my studies. These are
            the technologies I'm currently working with as I continue building
            projects and improving my practical skills{" "}
          </p>
        </div>
        <div className=" absolute z-10 flex gap-2 justify-start  top-28 ml-3">
          <div className=" px-7 py-1 rounded-sm text-white bg-blue-500">JS</div>
          <div className=" px-7 py-1 rounded-sm text-white bg-blue-500">
            REACT
          </div>
          <div className=" px-7 py-1 rounded-sm text-white bg-blue-500">
            SpringBoot
          </div>
          <div className=" px-7 py-1 rounded-sm text-white bg-blue-500">
            sql
          </div>
          <div className=" px-7 py-1 rounded-sm text-white bg-blue-500">
            javarefre
          </div>
        </div>
        <div className=" absolute z-10 flex gap-5 justify-start  bottom-7 ml-3">
          <div className=" w-40 h-13 rounded-sm bg-white">JvethoS</div>
          <div className=" w-40 h-13 rounded-sm bg-white">pytyrgn</div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
