import { useState } from "react";
import {
  Navbar,
  Option,
  Card,
  Suggestion,
  Randplace,
  Filter,
} from "../component";
import { Text } from "../library";
import { cardData } from "../assets";
import Popup from "../component/Popup";
import {Login} from "../component";

const Home = () => {
  //for popups
  const [isOpen, isSetOpen] = useState(false);
  const openPopup = () => isSetOpen(true);
  const closePopup = () => isSetOpen(false);

  //for suggestions
  const [suggestion, setSuggestion] = useState("");
  const placetoVisit = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    const selectedCard = cardData[randomIndex];
    setSuggestion(
      <Suggestion
        imageLink={selectedCard.imageurl}
        place={selectedCard.placename}
        city={selectedCard.city}
        desc={selectedCard.placepara}
      />
    );
  };
  //for inputs
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [places, setPlaces] = useState([]);
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    const filteredPlaces = cardData.filter((place) => place.city === city);
    setPlaces(filteredPlaces);
  };
  const city = new Set(cardData.map((place) => place.city));
  const cityList = [...city];
  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };
  const filterCard = cardData.filter(
    (place) => place.city === selectedCity && place.placename === selectedPlace
  );

  //for clear filters
  const filterReset = () => {
    setSuggestion("");
    setSelectedCity("");
    setSelectedPlace("");
  };
  //for all data
  const ListedPlaces = cardData.map((data) => (
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
      <Popup open={isOpen} close={closePopup}><Login /></Popup>
      <Randplace click={placetoVisit} />
      <Option
        changePlace={handlePlaceChange}
        changeCity={handleCityChange}
        defCity={selectedCity}
        City={cityList}
        Place={places}
      />
      <Filter click={filterReset} city={selectedCity} place={selectedPlace} />
      {suggestion}
      {filterplaces}
      <Text
        className="text-xl my-6 uppercase font-semibold"
        title="this simple title"
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {ListedPlaces}
      </div>
    </>
  );
};

export default Home;
