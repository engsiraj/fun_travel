import { useState } from "react";

const Popup = () => {
  const [isOpen, isSetOpen] = useState(false);
  const openPopup = () => isSetOpen(true);
  const closePopup = () => isSetOpen(false);
  return (
    <div>
      <button className="btn-blue" onClick={openPopup}>open</button>
      {isOpen && (
        <div className="fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] p-[20px] border-2 bg-white rounded">
          <div className="text-center">
            <p className="text-2xl">
              Lorem ipsum 
            </p>
           <div className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit unde doloribus consectetur a saepe cumque pariatur magni nulla voluptatum.</div>
            <button className="btn-blue" onClick={closePopup}>close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
