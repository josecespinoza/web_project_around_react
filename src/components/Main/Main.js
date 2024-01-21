import React from "react";
import { api } from "../../utils/api";
import Card from "../Card/Card";
import ImagePopup from "../ImagePopup/ImagePopup";
import Profile from "../Profile/Profile";

function Main() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isCardPopupOpened, setIsCardPopupOpened] = React.useState(false);

  React.useEffect(() => {
    api.configRequest({ resource: "cards" });
    api.get().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardClick({ name, imageLink }) {
    setIsCardPopupOpened(true);
    setSelectedCard({
      name,
      imageLink,
    });
  }

  function handlePopupCardClose() {
    setIsCardPopupOpened(false);
  }

  function handleAddCard(newCard) {
    setCards((prevCards) => [newCard].concat([...prevCards]));
  }

  function handleCardLike(cardId) {
    api.configRequest({
      resource: `/cards/likes/${cardId}`,
    });
    api.put().then((newLikedCard) => {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card._id === newLikedCard._id) {
            return newLikedCard;
          }
          return card;
        });
      });
    });
  }

  return (
    <>
      <Profile onAddCardSubmit={handleAddCard}></Profile>
      <main className="destinations page__destinations">
        <ul className="destinations__list">
          {cards.map((card, i) => (
            <li key={i} className="destinations__item">
              <Card
                id={card._id}
                name={card.name}
                imageLink={card.link}
                onCardClick={handleCardClick}
                cardIsLiked={card.likes.length > 0}
                likesCounter={card.likes.length}
                onLike={handleCardLike}
              ></Card>
            </li>
          ))}
        </ul>
      </main>
      {isCardPopupOpened && (
        <ImagePopup
          onClose={handlePopupCardClose}
          name={selectedCard.name}
          imageLink={selectedCard.imageLink}
        ></ImagePopup>
      )}
    </>
  );
}

export default Main;
