import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import ProfileForm from "./ProfileForm";
import AddCardForm from "./AddCardForm";
import EditAvatarForm from "./EditAvatarForm";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

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
    handleFormClose();
    setUserInfo(submitRes);
  }

  function handleEditAvatarSubmit(submitRes) {
    handleFormClose();
    setUserInfo(submitRes);
  }

  function handleAddCardSubmit(submitRes) {
    handleFormClose();
    onAddCardSubmit(submitRes);
  }

  function handleFormClose() {
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
      {isEditProfilePopupOpen && (
        <PopupWithForm
          onSubmit={handleEditProfileSubmit}
          onClose={handleFormClose}
        >
          <ProfileForm currentUser={currentUser}></ProfileForm>
        </PopupWithForm>
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm onSubmit={handleAddCardSubmit} onClose={handleFormClose}>
          <AddCardForm></AddCardForm>
        </PopupWithForm>
      )}
      {isEditAvatarPopupOpen && (
        <PopupWithForm
          onSubmit={handleEditAvatarSubmit}
          onClose={handleFormClose}
        >
          <EditAvatarForm></EditAvatarForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default Profile;
