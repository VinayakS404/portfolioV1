import { frontEndData,backEndData  } from "../data/technologies";
function SkillSection() {
  const frontEndTech = frontEndData.map((items) => {
    return (
      <div
        key={items.id}
        className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3"
      >
        <div
          className={` ${items.bg}  h-14 w-14 flex items-center justify-center rounded-sm `}
        >
          <img
            src={items.img}
            alt={`${items.name}-icon`}
            className={`${items.height || "h-10"}`}
          />
        </div>
        <div className="flex flex-col ml-5">
          <p className="text-white font-bold">{items.name}</p>
          <p className="text-gray-300 text-sm">{items.desc}</p>
        </div>
      </div>
    );
  });

  const backEndTech = backEndData.map((items) => {
    return (
      <div
        key={items.id}
        className="h-19 w-75 bg-[rgb(49,49,57)] rounded-md flex items-center px-3"
      >
        <div
          className={` ${items.bg}  h-14 w-14 flex items-center justify-center rounded-sm `}
        >
          <img
            src={items.img}
            alt={`${items.name}-icon`}
            className={`${items.height || "h-10"}`}
          />
        </div>
        <div className="flex flex-col ml-5">
          <p className="text-white font-bold">{items.name}</p>
          <p className="text-gray-300 text-sm">{items.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="pb-100  mt-50 flex flex-col items-center px-30 ">
        <div>
          <p className="text-white font-['Anton'] text-6xl w-130 ">
            Current
            <span className="text-blue-500 font-bold">&nbsp;technologies</span>
          </p>
          <p className="text-gray-300 w-300 pt-10 text-[19px]">
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
          <p className="text-gray-300 mt-5 w-300 text-text-[19px]">
            The part of a website users see and interact with, including layout,
            design, and basic interactivity
          </p>
          <div className=" w-100 grid grid-cols-4 gap-x-80 gap-y-10 mt-10">
            {frontEndTech}
          </div>
        </div>{" "}
        <div>
          <p className="text-white mt-20 font-['Anton'] text-4xl">Back-end</p>
          <p className="text-gray-300 mt-5 w-300 text-text-[19px]">
            The part of a website that works behind the scenes, handling server
            logic, databases, and data processing
          </p>
          <div className=" w-100 grid grid-cols-4 gap-x-80 gap-y-10 mt-10">
            {backEndTech}
          </div>
        </div>
      </div>
    </>
  );
}
export default SkillSection;
