import { useState } from "react";
import Popup from "./Popup";

function ImagePopup({ name, imageLink, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  function handlePopup() {
    setIsOpen(false);
  }

  function handleClose() {
    onClose();
  }

  return (
    <Popup
      onClose={handlePopup}
      type="image"
      isOpen={isOpen}
      afterClose={handleClose}
    >
      <img className="popup__photo" src={imageLink} />
      <p className="popup__description">{name}</p>
    </Popup>
  );
}

export default ImagePopup;
