import React from 'react'

const Filter = ({click}) => {
  return (
    <div>
      {" "}
      <div className="my-5">
        <a
          onClick={click}
          className="underline decoration-[2px] font-medium text-blue-400 cursor-pointer"
        >
          clear filter
        </a>
        {""} selected filter
      </div>
    </div>
  );
}

export default Filter