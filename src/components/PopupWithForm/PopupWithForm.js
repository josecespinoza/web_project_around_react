import { useState } from "react";
import { PopupWithFormContext } from "../Context/PopupWithFormContext";
import Popup from "../Popup/Popup";

function PopupWithForm({ children, onClose, onSubmit }) {
  const [submitRes, setSubmitRes] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  /*Is triggered from {children} form components and is passed as the context PopupWithFormContext*/
  function handleSubmit(res) {
    setSubmitRes(res);
    setIsOpen(false);
  }

  function handleAfterClose() {
    submitRes ? onSubmit(submitRes) : onClose();
  }

  function handleOnClose() {
    setIsOpen(false);
  }

  return (
    <Popup
      onClose={handleOnClose}
      afterClose={handleAfterClose}
      isOpen={isOpen}
      type="form"
    >
      <PopupWithFormContext.Provider value={handleSubmit}>
        {children}
      </PopupWithFormContext.Provider>
    </Popup>
  );
}

export default PopupWithForm;
