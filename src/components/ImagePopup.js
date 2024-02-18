import { useState } from "react";
import Popup from "./Popup";

function ImagePopup({ name, imageLink, onClose }) {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  function handlePopupClose() {
    onClose();
  }

  function handleCloseClick() {
    setIsPopupOpen(false);
  }

  return (
    <Popup
      isPopupOpen={isPopupOpen}
      type="image"
      onCloseClick={handleCloseClick}
      onClose={handlePopupClose}
    >
      <img className="popup__photo" alt={name} src={imageLink} />
      <p className="popup__description">{name}</p>
    </Popup>
  );
}

export default ImagePopup;
