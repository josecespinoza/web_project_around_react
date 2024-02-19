import AddCardForm from "./AddCardForm";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onSubmit }) {
  return (
    <>
      {isOpen && (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
          <AddCardForm></AddCardForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default AddPlacePopup;
