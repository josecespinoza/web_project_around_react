function Card({
  id,
  name,
  imageLink,
  cardIsLiked,
  likesCounter,
  onCardClick,
  onLike,
  onDeleteClick,
}) {
  function handleClick() {
    onCardClick({ name, imageLink });
  }

  function handleLike() {
    onLike(id, cardIsLiked);
  }

  function handleDelete() {
    onDeleteClick(id);
  }

  return (
    <div className="destination">
      <img
        className="destination__photo"
        src={imageLink}
        onClick={handleClick}
      />
      <button
        className="button button_theme_dark button_action_delete button_location_destination-photo"
        onClick={handleDelete}
      >
        <span className="button__icon button__icon_action_delete"></span>
      </button>
      <div className="destination__info destination__info_theme_dark">
        <p className="destination__name">{name}</p>
        <div className="like destination__like">
          <button
            className="button button_theme_dark button_action_like"
            onClick={handleLike}
          >
            <span
              className={`button__icon button__icon_action_${
                cardIsLiked ? "liked" : "like"
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
