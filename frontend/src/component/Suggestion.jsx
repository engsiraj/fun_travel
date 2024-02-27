import React from 'react'

const Suggestion = () => {
  return (
    <div className="sm:flex">
      <img
        className="md:w-2/4 w-full rounded-lg"
        src="https://images.unsplash.com/photo-1577632665240-453306f089cf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbGFob3JlfGVufDB8fDB8fHww"
        alt="Card image will be here"
      />
      <div className="md:w-2/4 w-full flex flex-col justify-center py-5 md:px-8">
        <p className="text-3xl mb-2">
          this is text, <span className="text-blue-500">name here too</span>
        </p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          facilis suscipit veniam provident beatae non iusto dolor asperiores
          consectetur. Sit!
        </p>
      </div>
    </div>
  );
}

export default Suggestion