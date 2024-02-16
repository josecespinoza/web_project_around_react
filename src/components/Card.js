import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({
  id,
  name,
  imageLink,
  likesCounter,
  onCardClick,
  onLike,
  onDeleteClick,
  card,
}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = currentUser._id === card.owner._id;
  const isLiked = card.likes.some((user) => user._id === currentUser._id);

  function handleClick() {
    onCardClick({ name, imageLink });
  }

  function handleLikeClick() {
    onLike(card, isLiked);
  }

  function handleDelete() {
    onDeleteClick(card._id);
  }

  return (
    <div className="destination">
      <img
        className="destination__photo"
        src={imageLink}
        onClick={handleClick}
        alt={name}
      />
      {isOwn && (
        <button
          className="button button_theme_dark button_action_delete button_location_destination-photo"
          onClick={handleDelete}
        >
          <span className="button__icon button__icon_action_delete"></span>
        </button>
      )}
      <div className="destination__info destination__info_theme_dark">
        <p className="destination__name">{name}</p>
        <div className="like destination__like">
          <button
            className="button button_theme_dark button_action_like"
            onClick={handleLikeClick}
          >
            <span
              className={`button__icon button__icon_action_${
                isLiked ? "liked" : "like"
              }`}
            ></span>
          </button>
          <p className="like__counter">{likesCounter}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
