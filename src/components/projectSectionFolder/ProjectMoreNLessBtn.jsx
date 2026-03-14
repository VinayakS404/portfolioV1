function ProjectMoreNLessBtn({ setIsDetailed, isDetailed }) {
  function reverseDetail() {
    setIsDetailed(!isDetailed);
  }
  return (
    <div className="hidden md:flex relative  flex-col items-center gap-2">
      <button
        className=" w-50 h-13 mt-20 border-t border-l border-[#404145] bg-[rgb(80,80,92)]/50 backdrop-blur-sm rounded-md flex items-center justify-center hover:scale-102 hover:bg-[rgb(80,80,92)]/70 hover:border-t-2 hover:border-l-2 hover:border-[#4f5155]  transition-all ease-in-out active:bg-[#59575f] "
        onClick={reverseDetail}
      >
        <p className="text-xl font-medium text-white text-shadow-2xs">
          {isDetailed ? "Less Detail" : "More Detail"}
        </p>
      </button>
      <p className="text-sm  text-gray-300 text-shadow-2xs">
        {isDetailed
          ? "Show less for a simplified view"
          : "Expand to view full project descriptions and technical stacks"}
      </p>
    </div>
  );
}
export default ProjectMoreNLessBtn;
