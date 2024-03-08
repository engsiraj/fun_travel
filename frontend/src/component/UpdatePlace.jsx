import { updateItem } from "../assets";
const UpdatePlace = ({ updatedData, handleChange }) => {
  return (
    <>
      <div className="my-3 w-[310px]">
        <div className="w-full mt-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            place name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="placename"
              value={updatedData.placename}
              onChange={handleChange}
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
              value={updatedData.city}
              type="text"
              name="city"
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
              value={updatedData.imageurl}
              type="text"
              name="imageurl"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button
          onClick={() => updateItem(updatedData.id, updatedData)}
          className="mt-4 w-full block rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          update
        </button>
      </div>
    </>
  );
};

export default UpdatePlace;
