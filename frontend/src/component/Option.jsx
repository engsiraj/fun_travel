const Option = ({ changeCity, defCity, Place, City, changePlace }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between space-x-4">
        <select
          className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={changeCity}
          value={defCity}
        >
          {City.map((city, index) => (
            <option key={index} vlaue={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          // disabled={!defCity}
          onChange={changePlace}
        >
          {Place.map((data, index) => (
            <option key={index} value={data.placename}>
              {data.placename}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Option;
