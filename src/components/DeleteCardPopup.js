import CardDeleteForm from "./CardDeleteForm";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, onSubmit, cardId }) {
  return (
    <>
      {isOpen && (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
          <CardDeleteForm cardId={cardId}></CardDeleteForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default DeleteCardPopup;
