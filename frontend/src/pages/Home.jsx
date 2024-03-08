import { useState, useContext, useEffect } from "react";
import {
  Navbar,
  Option,
  Card,
  Suggestion,
  Randplace,
  Filter,
  DataContext,
} from "../component";
import { Text } from "../library";
import Popup from "../component/Popup";
import { Login } from "../component";
import { fetchItems } from "../assets";

const Home = () => {
  //for data
  const { place, setPlace, isUpdated } = useContext(DataContext);
  useEffect(() => {
    let mounted = true;
    if (place.length && !isUpdated) {
      return;
    }
    fetchItems().then((data) => {
      if (mounted) {
        setPlace(data);
      }
    });

    return () => (mounted = false);
  }, [isUpdated, place]);
  //for inputs
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [places, setPlaces] = useState([]);
  //for popups
  const [isOpen, isSetOpen] = useState(false);
  const openPopup = () => isSetOpen(true);
  const closePopup = () => isSetOpen(false);
  //for suggestions
  const [suggestion, setSuggestion] = useState("");
  //random place
  const placetoVisit = () => {
    const randomIndex = Math.floor(Math.random() * place.length);
    const selectedCard = place[randomIndex];
    setSuggestion(
      <Suggestion
        imageLink={selectedCard.imageurl}
        place={selectedCard.placename}
        city={selectedCard.city}
        desc={selectedCard.placepara}
      />
    );
    setSelectedCity("");
    setSelectedPlace("");
  };
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    const filteredPlaces = place.filter((place) => place.city === city);
    setPlaces(filteredPlaces);
  };
  const city = new Set(place.map((place) => place.city));
  const cityList = [...city];
  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
    setSuggestion("");
  };

  const filterCard = place.filter(
    (place) => place.city === selectedCity && place.placename === selectedPlace
  );

  //for clear filters
  const filterReset = () => {
    setSuggestion("");
    setSelectedCity("");
    setSelectedPlace("");
  };
  //for all data
  const ListedPlaces = place.map((data) => (
    <Card
      id={data.id}
      imageLink={data.imageurl}
      cityName={data.city}
      placeName={data.placename}
    />
  ));
  const filterplaces = filterCard.map((data) => (
    <Suggestion
      imageLink={data.imageurl}
      place={data.placename}
      city={data.city}
      desc={data.placepara}
    />
  ));
  return (
    <>
      <Navbar open={openPopup} />
      <Popup open={isOpen} close={closePopup}>
        <Login />
      </Popup>
      <div className="mt-12 md:flex items-center md:space-x-12 ">
        <div className="md:w-2/4">
          <Randplace click={placetoVisit} />
          <Option
            changePlace={handlePlaceChange}
            changeCity={handleCityChange}
            defCity={selectedCity}
            City={cityList}
            Place={places}
          />
          <Filter
            click={filterReset}
            city={selectedCity}
            place={selectedPlace}
          />
        </div>
        <div className="md:w-2/4 ">
          {" "}
          {suggestion}
          {filterplaces}
        </div>
      </div>

      <Text
        className="text-xl my-6 uppercase font-semibold text-gray-500"
        title="Places you want to visit"
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {ListedPlaces}
      </div>
    </>
  );
};

export default Home;
