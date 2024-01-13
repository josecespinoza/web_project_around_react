import Popup from "../Popup/Popup";

function PopupWithForm({ children, onClose }) {
  return (
    <Popup onClose={onClose} type="form">
      {children}
    </Popup>
  );
}

export default PopupWithForm;
