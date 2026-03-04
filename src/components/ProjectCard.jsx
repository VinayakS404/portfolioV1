function ProjectCard() {
  return (
    <div className=" w-screen h-100 bg-amber-50 flex  justify-center   ">
      <div className=" w-290 h-full bg-amber-100  relative  flex ">
        <div className="w-130 h-90 bg-amber-500 right-0 my-auto inset-y-0 absolute   "></div>
        <div className="w-180 h-30 bg-black my-auto inset-y-0 absolute z-10 "></div>
        <div className=" absolute z-10 flex gap-5  bg-amber-500">
          <div className=" px-7 py-1 bg-blue-400">JS</div>
          <div className=" px-7 py-1 bg-blue-400">python</div>
          <div className=" px-7 py-1 bg-blue-400">java</div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
