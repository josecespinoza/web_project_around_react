import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";

function Profile() {
  const [isFormOpened, setIsFormOpened] = React.useState(false);

  function handleEditProfileClick() {
    setIsFormOpened(true);
  }

  function handleFormClose() {
    setIsFormOpened(false);
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
          <button className="button button_theme_dark button_action_add button_location_profile">
            <span className="button__icon button__icon_action_add"></span>
          </button>
        </div>
      </section>
      {isFormOpened && (
        <PopupWithForm onClose={handleFormClose}>
          <Form title="Editar Perfil">
            <InputSet
              type="text"
              name="name"
              placeholder="Nombre"
              maxLength="40"
              minLength="2"
              required={true}
            ></InputSet>
            <InputSet
              type="text"
              name="aboutMe"
              placeholder="Acerca de mí"
              maxLength="200"
              minLength="2"
              required={true}
            ></InputSet>
          </Form>
        </PopupWithForm>
      )}
    </>
  );
}

export default Profile;
