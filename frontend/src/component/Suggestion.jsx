import React from "react";

const Suggestion = ({ imageLink, place, city }) => {
  return (
    <div className="">
      <img
        className=" w-full rounded-lg"
        src={imageLink}
        alt="Card image will be here"
      />
      <div className=" w-full flex flex-col justify-center py-5">
        <p className="text-3xl mb-2">
          {place} <span className="text-indigo-600">{city}</span>
        </p>
      </div>
    </div>
  );
};

export default Suggestion;
