import React, { useRef } from "react";

function Popup({ children, onClose, type }) {
  const [isOpened, setIsOpened] = React.useState(true);
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current.focus();
  }, []);

  function isCloseEvent(evt) {
    return (
      evt.key?.toLowerCase() === "escape" || evt.type.toLowerCase() === "click"
    );
  }

  function handleClose(evt) {
    if (!isCloseEvent(evt)) {
      return;
    }
    setIsOpened(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }

  return (
    <div
      ref={ref}
      className={`popup popup_state_${isOpened ? "opened" : "closed"}`}
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
