import PopupWithForm from "./PopupWithForm";
import ProfileForm from "./ProfileForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function EditProfilePopup({ onClose, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <PopupWithForm onClose={onClose} onSubmit={onSubmit}>
      <ProfileForm currentUser={currentUser}></ProfileForm>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
