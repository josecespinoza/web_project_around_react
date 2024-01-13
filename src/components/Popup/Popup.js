import React from "react";

function Popup({ children, onClose, type }) {
  const [isOpened, setIsOpened] = React.useState(true);

  /*   React.useEffect(() => {
    return console.log("cleaned");
  }); */

  function handleClose() {
    setIsOpened(false);
    onClose();
  }

  return (
    <div
      className={`popup popup_state_${isOpened ? "opened" : "closed"}`}
      tabIndex="10"
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
      <div className="popup__backdrop"></div>
    </div>
  );
}

export default Popup;
