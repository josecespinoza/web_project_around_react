import PopupWithForm from "./PopupWithForm";
import ProfileForm from "./ProfileForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function EditProfilePopup({ isOpen, onClose, onSubmit }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      {isOpen && (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
          <ProfileForm currentUser={currentUser}></ProfileForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default EditProfilePopup;
