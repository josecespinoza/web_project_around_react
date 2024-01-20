import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ProfileForm from "./ProfileForm";
import AddCardForm from "../AddCardForm/AddCardForm";
import EditAvatarForm from "./EditAvatarForm";
import { api } from "../../utils/api";

function Profile() {
  const [userInfo, setUserInfo] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  React.useEffect(() => {
    api.configRequest({ resource: "users/me" });
    api.get().then((res) => {
      setUserInfo(res);
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
    debugger;
    handleFormClose();
    setUserInfo(submitRes);
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
            src={userInfo.avatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userInfo.name}</h1>
          <h2 className="profile__occupation">{userInfo.about}</h2>
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
        <PopupWithForm onClose={handleFormClose}>
          <ProfileForm onSubmit={handleEditProfileSubmit}></ProfileForm>
        </PopupWithForm>
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm onClose={handleFormClose}>
          <AddCardForm></AddCardForm>
        </PopupWithForm>
      )}
      {isEditAvatarPopupOpen && (
        <PopupWithForm onClose={handleFormClose}>
          <EditAvatarForm onSubmit={handleEditAvatarSubmit}></EditAvatarForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default Profile;
