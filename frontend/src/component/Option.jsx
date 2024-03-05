const Option = ({ changeCity, defCity, Place, City, changePlace }) => {
  return (
    <div className="mt-6">
      <div className="flex space-x-4 mt-4">
        <select
          className="form-select px-4 py-3 rounded w-full"
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
          className="form-select px-4 py-3 rounded w-full"
          disabled={!defCity}
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
