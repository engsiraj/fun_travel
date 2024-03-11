import { useState, useContext, useEffect } from "react";
import {
  AddPlace,
  Navbar,
  Popup,
  PlacesList,
  UpdatePlace,
  DataContext,
} from "../component";
import { Text } from "../library";
import { fetchItems } from "../assets";

const Detailpage = () => {
  // data fetching
  const { place, setPlace, isUpdated } = useContext(DataContext);
  //popups
  const [isOpen, isSetOpen] = useState(false);
  const [isOpenUp, isSetOpenUp] = useState(false);
  //data
  const [updatedData, setUpdatedData] = useState({});
  //data ue
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
  const username = "Siraj";
  //popup func
  const openPopup = () => {
    isSetOpen(true);
    isSetOpenUp(false);
  };
  const closePopup = () => {
    isSetOpen(false);
    isSetOpenUp(false);
  };

  const openPopupUp = () => {
    isSetOpen(false);
    isSetOpenUp(true);
  };
  const closePopupUp = () => {
    isSetOpen(false);
    isSetOpenUp(false);
  };

  const handleClick = (data) => {
    openPopupUp();
    setUpdatedData({
      id: data.id,
      placename: data.placename,
      city: data.city,
      imageurl: data.imageurl,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar open={openPopup} />
      <Text className="text-xl mt-5 font-semibold" title={`Hi, ${username}`} />
      <Popup open={isOpen} close={closePopup}>
        <AddPlace closePopup={closePopup} />
      </Popup>
      <PlacesList openUp={handleClick} />
      <Popup open={isOpenUp} close={closePopupUp}>
        <UpdatePlace
          handleChange={handleChange}
          updatedData={updatedData}
          close={closePopup}
        />
      </Popup>
    </>
  );
};

export default Detailpage;
