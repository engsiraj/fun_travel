import React from 'react'

const Suggestion = ({imageLink,place,city,desc}) => {
  return (
    <div className="sm:flex">
      <img
        className="md:w-2/4 w-full rounded-lg"
        src={imageLink}
        alt="Card image will be here"
      />
      <div className="md:w-2/4 w-full flex flex-col justify-center py-5 md:px-8">
        <p className="text-3xl mb-2">
          {place} <span className="text-indigo-600">{city}</span>
        </p>
        <p className="mt-2">{desc}</p>
      </div>
    </div>
  );
}

export default Suggestion