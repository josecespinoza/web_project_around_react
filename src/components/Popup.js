import { useRef, useEffect, useState } from "react";

function Popup({ children, isPopupOpen, type, onCloseClick, onClose = null }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
    !isPopupOpen && handleClose();
  }, [isPopupOpen]);

  function isCloseEvent(evt) {
    return (
      evt.key?.toLowerCase() === "escape" || evt.type.toLowerCase() === "click"
    );
  }

  //Delays 300ms before resolving to wait for closing animation to end
  function closeAnimationDelay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  }

  //Triggered after the popup has completely closed
  function handleClose() {
    closeAnimationDelay().then(() => {
      onClose && onClose();
    });
  }

  //Triggered when the user clicks quitting icon, outside the modal or on escape keyup
  function handleCloseClick(evt) {
    if (!isCloseEvent(evt)) {
      return;
    }
    onCloseClick();
  }

  return (
    <div
      ref={ref}
      className={`popup popup_state_${isPopupOpen ? "opened" : "closed"}`}
      tabIndex="10"
      onKeyUp={handleCloseClick}
    >
      <div className={`popup__content popup__content_type_${type}`}>
        {children}
      </div>
      <div className="popup__close-button">
        <button
          className="button button_theme_dark button_action_close"
          onClick={handleCloseClick}
        >
          <span className="button__icon button__icon_action_close"></span>
        </button>
      </div>
      <div className="popup__backdrop" onClick={handleCloseClick}></div>
    </div>
  );
}

export default Popup;
