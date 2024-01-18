import React from "react";

function Card({ name, imageLink, onClick }) {
  return (
    <div className="destination">
      <img className="destination__photo" src={imageLink} onClick={onClick} />
      <button className="button button_theme_dark button_action_delete button_location_destination-photo">
        <span className="button__icon button__icon_action_delete"></span>
      </button>
      <div className="destination__info destination__info_theme_dark">
        <p className="destination__name">{name}</p>
        <div className="like destination__like">
          <button className="button button_theme_dark button_action_like">
            <span className="button__icon button__icon_action_like"></span>
          </button>
          <p className="like__counter"></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
