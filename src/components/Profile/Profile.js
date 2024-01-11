function Profile() {
  return (
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
        <button className="button button_theme_dark button_action_edit button_location_profile-info">
          <span className="button__icon button__icon_action_edit"></span>
        </button>
      </div>
      <div className="profile__options">
        <button className="button button_theme_dark button_action_add button_location_profile">
          <span className="button__icon button__icon_action_add"></span>
        </button>
      </div>
    </section>
  );
}

export default Profile;
