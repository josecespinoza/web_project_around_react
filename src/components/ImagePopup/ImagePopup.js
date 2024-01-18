import React from "react";
import Popup from "../Popup/Popup";

function ImagePopup({ name, imageLink, onClose }) {
  function handleClose() {
    onClose();
  }

  return (
    <Popup onClose={handleClose} type="image">
      <img className="popup__photo" src={imageLink} />
      <p className="popup__description">{name}</p>
    </Popup>
  );
}

export default ImagePopup;
