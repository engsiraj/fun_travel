import React from "react";

const Randplace = ({click}) => {
  return (
    <>
      please select your options, {""}
      <a
              className="underline decoration-[2px] font-medium text-blue-400 cursor-pointer"
              onClick={click}
      >
        Help me to choose
      </a>
    </>
  );
};

export default Randplace;
