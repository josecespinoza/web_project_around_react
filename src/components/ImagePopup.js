import { useState } from "react";
import Popup from "./Popup";

function ImagePopup({ name, imageLink, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleCloseClick() {
    setIsOpen(false);
  }

  function handlePopupClose() {
    onClose();
  }

  return (
    <Popup
      type="image"
      isOpen={isOpen}
      onCloseClick={handleCloseClick}
      onClose={handlePopupClose}
    >
      <img className="popup__photo" alt={name} src={imageLink} />
      <p className="popup__description">{name}</p>
    </Popup>
  );
}

export default ImagePopup;
