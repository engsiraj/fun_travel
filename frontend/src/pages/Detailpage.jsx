import { useState } from "react";
import { AddPlace, Navbar, Popup, PlacesList, UpdatePlace } from "../component";
import { Delete, Text } from "../library";
import { cardData } from "../assets";

const Detailpage = () => {
  //pop ups
  const [isOpen, isSetOpen] = useState(false);
  const [isOpenDel, isSetOpenDel] = useState(false);
  const [isOpenUp, isSetOpenUp] = useState(false);
  const openPopup = () => {
    isSetOpen(true);
    isSetOpenDel(false);
    isSetOpenUp(false);
  };
  const closePopup = () => {
    isSetOpen(false);
    isSetOpenDel(false);
    isSetOpenUp(false);
  };
  const openPopupDel = () => {
    isSetOpen(false);
    isSetOpenDel(true);
    isSetOpenUp(false);
  };
  const closePopupDel = () => {
    isSetOpen(false);
    isSetOpenDel(false);
    isSetOpenUp(false);
  };
  const openPopupUp = () => {
    isSetOpen(false);
    isSetOpenDel(false);
    isSetOpenUp(true);
  };
  const closePopupUp = () => {
    isSetOpen(false);
    isSetOpenDel(false);
    isSetOpenUp(false);
  };
  const username = "Siraj";

  return (
    <>
      <Navbar open={openPopup} />
      <Text className="text-xl mt-5 font-semibold" title={`Hi, ${username}`} />
      <Popup open={isOpen} close={closePopup}>
        <AddPlace />
      </Popup>
      <PlacesList openDel={openPopupDel} openUp={openPopupUp} data={cardData} />
      <Popup open={isOpenDel} close={closePopupDel}>
        <Delete />
      </Popup>
      <Popup open={isOpenUp} close={closePopupUp}>
        <UpdatePlace />
      </Popup>
    </>
  );
};

export default Detailpage;
