import { useState } from "react";
import { createItem } from "../assets";

const AddPlace = ({ closePopup }) => {
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <div className="my-3 w-[310px]">
        <div className="w-full mt-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            place name
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              type="text"
              id="placename"
              name="placename"
              value={values.placename || ""}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            city
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              type="text"
              id="city"
              name="city"
              value={values.city || ""}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            image url
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              type="text"
              id="imageurl"
              name="imageurl"
              value={values.imageurl || ""}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button
          onClick={()=>createItem(values, closePopup)}
          type="button"
          className="mt-4 w-full block rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          save
        </button>
      </div>
    </>
  );
};

export default AddPlace;
