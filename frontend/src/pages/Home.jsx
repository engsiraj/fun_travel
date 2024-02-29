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

const Home = () => {

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
  //to clear filters 
  const filterReset = () => {
    setSuggestion("");
  };
  
  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />
        <Randplace click={placetoVisit} />
        <Option />
        <Filter click={filterReset} />
        {suggestion}
        <Text
          className="text-xl my-6 uppercase font-semibold"
          title="this simple title"
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
          {cardData.map((data) => (
            <Card
              imageLink={data.imageurl}
              cityName={data.city}
              placeName={data.placename}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
