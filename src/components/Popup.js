import { useRef, useEffect } from "react";

function Popup({ children, type, isOpen, onCloseClick, onClose = null }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
    !isOpen && handleClose();
  }, [isOpen]);

  function isCloseEvent(evt) {
    return (
      evt.key?.toLowerCase() === "escape" || evt.type.toLowerCase() === "click"
    );
  }

  //Will wait for popup closing animation to end and trigger afterClose function
  function handleClose() {
    setTimeout(() => {
      onClose && onClose();
    }, 300);
  }

  function handleCloseClick(evt) {
    if (!isCloseEvent(evt)) {
      return;
    }
    onCloseClick();
  }

  return (
    <div
      ref={ref}
      className={`popup popup_state_${isOpen ? "opened" : "closed"}`}
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
