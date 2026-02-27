import { frontEndData, backEndData } from "../data/technologies";
function SkillSection() {
  const frontEndTech = frontEndData.map((items) => {
    return (
      <div
        key={items.id}
        className="h-25 sm:h-20  bg-[rgb(49,49,57)] rounded-md flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 px-3 "
      >
        <div
          className={` ${items.bg}  h-14 w-14 lex shrink-0 flex  items-center justify-center rounded-sm mt-1 sm:mt-0`}
        >
          <img
            src={items.img}
            alt={`${items.name}-icon`}
            className={`${items.height || "h-10"}`}
          />
        </div>
        <div className="flex flex-col sm:ml-5 ">
          <p className="text-white font-bold">{items.name}</p>
          <p className="text-gray-300 text-sm  hidden sm:block">{items.desc}</p>
        </div>
      </div>
    );
  });

  const backEndTech = backEndData.map((items) => {
    return (
      <div
        key={items.id}
        className="h-25 sm:h-20  bg-[rgb(49,49,57)] rounded-md flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 px-3 "
      >
        <div
          className={` ${items.bg}  h-14 w-14 lex shrink-0 flex  items-center justify-center rounded-sm mt-1 sm:mt-0`}
        >
          <img
            src={items.img}
            alt={`${items.name}-icon`}
            className={`${items.height || "h-10"}`}
          />
        </div>
        <div className="flex flex-col sm:ml-5 ">
          <p className="text-white font-bold">{items.name}</p>
          <p className="text-gray-300 text-sm  hidden sm:block">{items.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="pb-100  mt-50 flex flex-col  items-center px-10 ">
      <div>
        <p className="text-white font-['Anton'] text-[45px] md:text-6xl w-full max-w-2xl leading-tight">
          Current&nbsp;
          <span className="text-blue-500 font-bold block md:inline">
            technologies
          </span>
        </p>
        <p className="text-gray-300 max-w-6xl pt-5 md:pt-10 text-base md:text-[19px]">
          I am currently pursuing
          <span className="text-blue-500 font-bold">
            &nbsp;Bachelor of Computer Applications (BCA)&nbsp;
          </span>
          while learning
          <span className="text-blue-500 font-bold">
            &nbsp;Java full-stack&nbsp;
          </span>
          development alongside my studies. These are the technologies I’m
          currently working with as I continue building projects and improving
          my
          <span className="text-blue-500 font-bold">
            &nbsp;practical skills&nbsp;
          </span>
        </p>
      </div>
      <div>
        <p className="text-white mt-20 font-['Anton'] text-4xl">Front-end</p>
        <p className="text-gray-300 pt-5 max-w-3xl text-text-[19px] ">
          The part of a website users see and interact with, including layout,
          design, and basic interactivity
        </p>
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {frontEndTech}
        </div>
      </div>{" "}
      <div>
        <p className="text-white mt-20 font-['Anton'] text-4xl">Back-end</p>
        <p className="text-gray-300 mt-5 max-w-3xl text-text-[19px]">
          The part of a website that works behind the scenes, handling server
          logic, databases, and data processing
        </p>
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {backEndTech}
        </div>
      </div>
    </div>
  );
}
export default SkillSection;
