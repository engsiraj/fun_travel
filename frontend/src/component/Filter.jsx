import React from "react";

const Filter = ({ click, city, place }) => {
  return (
    <div>
      {" "}
      <div className="my-5">
        <a
          onClick={click}
          className="underline decoration-[2px] font-medium text-indigo-600 cursor-pointer"
        >
          clear filter
        </a>
        <span className="text-xs ms-2 font-medium">{city}</span>
        <span className="text-xs ms-2 font-medium">{place}</span>
      </div>
    </div>
  );
};

export default Filter;
