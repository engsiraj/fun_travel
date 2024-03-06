import React from "react";

const Delete = () => {
  return (
    <>
      <div className="w-[320px]">
        {" "}
        <p className="mt-2 text-lg font-medium">this is delete page</p>
        <p className="mt-2  text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          enim accusantium nulla vitae animi dolor sed ullam repudiandae
          deserunt! Unde.
        </p>
        <button className=" mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Delete
        </button>
      </div>
    </>
  );
};

export default Delete;
