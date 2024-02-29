function Card({imageLink, cityName, placeName}) {
  return (
    <>
      <div className="w-full">
        <img
          className=" w-full rounded-lg"
          src={imageLink}
          alt={placeName}
        />
        <div className="w-full pt-4">
          <p className="text-xl font-medium mb-2">
            {placeName}, <span className="text-blue-500">{cityName}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card
