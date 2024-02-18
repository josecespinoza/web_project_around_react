import { useState } from "react";
import { PopupWithFormContext } from "./PopupWithFormContext";
import Popup from "./Popup";

function PopupWithForm({ children, isOpen, onClose, onSubmit }) {
  const [submitRes, setSubmitRes] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  /*Passed as context to children forms*/
  function handleFormSubmit(res) {
    setSubmitRes(res);
    setIsPopupOpen(false);
  }

  function handlePopupClose() {
    submitRes ? onSubmit(submitRes) : onClose();
  }

  function handlePopupCloseClick() {
    setIsPopupOpen(false);
  }

  return (
    <>
      {isOpen && (
        <Popup
          isPopupOpen={isPopupOpen}
          type="form"
          onCloseClick={handlePopupCloseClick}
          onClose={handlePopupClose}
        >
          <PopupWithFormContext.Provider value={handleFormSubmit}>
            {children}
          </PopupWithFormContext.Provider>
        </Popup>
      )}
    </>
  );
}

export default PopupWithForm;
