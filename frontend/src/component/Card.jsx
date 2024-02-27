import React from 'react'

function Card() {
  return (
    <>
      <div className="w-full">
        <img
          className=" w-full rounded-lg"
          src="https://images.unsplash.com/photo-1699978721308-9274a72b688a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGxhaG9yZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Card image will be here"
        />
        <div className="w-full pt-4">
          <p className="text-xl font-medium mb-2">
            this is text, <span className="text-blue-500">name here too</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card
