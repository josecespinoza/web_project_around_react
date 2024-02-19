import { useContext } from "react";
import EditAvatarForm from "./EditAvatarForm";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onSubmit }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      {isOpen && (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
          <EditAvatarForm currentUser={currentUser}></EditAvatarForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default EditAvatarPopup;
