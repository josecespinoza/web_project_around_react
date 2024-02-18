import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import ProfileForm from "./ProfileForm";
import AddCardForm from "./AddCardForm";
import EditAvatarForm from "./EditAvatarForm";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function Profile({ onAddCardSubmit, onUserLogin }) {
  const [userInfo, setUserInfo] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.configRequest({ resource: "users/me" });
    api.get().then((res) => {
      setUserInfo(res);
      onUserLogin({ userId: res._id });
    });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditProfileSubmit(submitRes) {
    closeAllPopups();
    setUserInfo(submitRes);
  }

  function handleEditAvatarSubmit(submitRes) {
    closeAllPopups();
    setUserInfo(submitRes);
  }

  function handleAddCardSubmit(submitRes) {
    closeAllPopups();
    onAddCardSubmit(submitRes);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <>
      <section className="profile page__profile">
        <div className="profile__avatar-mask">
          <button
            className="button button_theme_dark button_action_edit button_location_profile-avatar"
            onClick={handleEditAvatarClick}
          >
            <span className="button__icon button__icon_action_edit button__icon_location-profile-avatar"></span>
          </button>
          <img
            id="image-avatar"
            className="profile__avatar"
            alt="Profile avatar"
            src={currentUser.avatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <h2 className="profile__occupation">{currentUser.about}</h2>
          <button
            className="button button_theme_dark button_action_edit button_location_profile-info"
            onClick={handleEditProfileClick}
          >
            <span className="button__icon button__icon_action_edit"></span>
          </button>
        </div>
        <div className="profile__options">
          <button
            className="button button_theme_dark button_action_add button_location_profile"
            onClick={handleAddPlaceClick}
          >
            <span className="button__icon button__icon_action_add"></span>
          </button>
        </div>
      </section>
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onSubmit={handleEditProfileSubmit}
        onClose={closeAllPopups}
      ></EditProfilePopup>

      {isAddPlacePopupOpen && (
        <PopupWithForm onSubmit={handleAddCardSubmit} onClose={closeAllPopups}>
          <AddCardForm></AddCardForm>
        </PopupWithForm>
      )}
      {isEditAvatarPopupOpen && (
        <PopupWithForm
          onSubmit={handleEditAvatarSubmit}
          onClose={closeAllPopups}
        >
          <EditAvatarForm></EditAvatarForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default Profile;
