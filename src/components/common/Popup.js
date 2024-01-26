import { useRef, useEffect } from "react";

function Popup({ children, onClose, type, isOpen, afterClose = null }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
    !isOpen && closingAnimation();
  }, [isOpen]);

  function isCloseEvent(evt) {
    return (
      evt.key?.toLowerCase() === "escape" || evt.type.toLowerCase() === "click"
    );
  }

  //Will animate popup closing and trigger afterClose function
  function closingAnimation() {
    setTimeout(() => {
      afterClose && afterClose();
    }, 300);
  }

  function handleClose(evt) {
    if (!isCloseEvent(evt)) {
      return;
    }
    onClose();
  }

  return (
    <div
      ref={ref}
      className={`popup popup_state_${isOpen ? "opened" : "closed"}`}
      tabIndex="10"
      onKeyUp={handleClose}
    >
      <div className={`popup__content popup__content_type_${type}`}>
        {children}
      </div>
      <div className="popup__close-button">
        <button
          className="button button_theme_dark button_action_close"
          onClick={handleClose}
        >
          <span className="button__icon button__icon_action_close"></span>
        </button>
      </div>
      <div className="popup__backdrop" onClick={handleClose}></div>
    </div>
  );
}

export default Popup;
