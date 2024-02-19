import { useState } from "react";
import Popup from "./Popup";

function ImagePopup({ onClose, card }) {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  function handlePopupClose() {
    onClose();
  }

  function handleCloseClick() {
    setIsPopupOpen(false);
  }

  return (
    <>
      <Popup
        isPopupOpen={isPopupOpen}
        type="image"
        onCloseClick={handleCloseClick}
        onClose={handlePopupClose}
      >
        <img className="popup__photo" alt={card.name} src={card.link} />
        <p className="popup__description">{card.name}</p>
      </Popup>
    </>
  );
}

export default ImagePopup;
