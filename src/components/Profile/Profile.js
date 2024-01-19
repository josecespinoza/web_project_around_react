import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ProfileForm from "../ProfileForm/ProfileForm";
import AddCardForm from "../AddCardForm/AddCardForm";

function Profile() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleFormClose() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  //handleEditAvatarClick;
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <>
      <section className="profile page__profile">
        <div className="profile__avatar-mask">
          <button className="button button_theme_dark button_action_edit button_location_profile-avatar">
            <span className="button__icon button__icon_action_edit button__icon_location-profile-avatar"></span>
          </button>
          <img
            id="image-avatar"
            className="profile__avatar"
            alt="Profile avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <h2 className="profile__occupation"></h2>
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
          <ProfileForm></ProfileForm>
        </PopupWithForm>
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm onClose={handleFormClose}>
          <AddCardForm></AddCardForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default Profile;
