import { useState } from "react";
import { PopupWithFormContext } from "./PopupWithFormContext";
import Popup from "./Popup";

function PopupWithForm({ children, onClose, onSubmit }) {
  const [submitRes, setSubmitRes] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  /*Passed as context to children and triggered from them*/
  function handleFormSubmit(res) {
    setSubmitRes(res);
    setIsOpen(false);
  }

  function handleCloseClick() {
    setIsOpen(false);
  }

  function handlePopupClose() {
    submitRes ? onSubmit(submitRes) : onClose();
  }

  return (
    <Popup
      isOpen={isOpen}
      type="form"
      onClose={handlePopupClose}
      onCloseClick={handleCloseClick}
    >
      <PopupWithFormContext.Provider value={handleFormSubmit}>
        {children}
      </PopupWithFormContext.Provider>
    </Popup>
  );
}

export default PopupWithForm;
