import React from "react";

const Randplace = ({click}) => {
  return (
    <>
      <div className="mt-5">
        {" "}
        please select your options, {""}
        <a
          className="underline decoration-[2px] font-medium text-indigo-600 cursor-pointer"
          onClick={click}
        >
          Help me to choose
        </a>
      </div>
    </>
  );
};

export default Randplace;
