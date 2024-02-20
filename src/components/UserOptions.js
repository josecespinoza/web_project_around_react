import { useContext } from "react";

function UserOptions({
  currentUser,
  onEditProfileClick,
  onEditAvatarClick,
  onAddPlaceClick,
}) {
  return (
    <section className="profile page__profile">
      <div className="profile__avatar-mask">
        <button
          className="button button_theme_dark button_action_edit button_location_profile-avatar"
          onClick={onEditAvatarClick}
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
          onClick={onEditProfileClick}
        >
          <span className="button__icon button__icon_action_edit"></span>
        </button>
      </div>
      <div className="profile__options">
        <button
          className="button button_theme_dark button_action_add button_location_profile"
          onClick={onAddPlaceClick}
        >
          <span className="button__icon button__icon_action_add"></span>
        </button>
      </div>
    </section>
  );
}

export default UserOptions;
