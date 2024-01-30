import { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import Profile from "./Profile";
import PopupWithForm from "./PopupWithForm";
import CardDeleteForm from "./CardDeleteForm";

function Main() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpened, setIsCardPopupOpened] = useState(false);
  const [isCardDeleteOpened, setIsCardDeleteOpened] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
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
    setIsCardDeleteOpened(false);
  }

  function handleAddCard(newCard) {
    setCards((prevCards) => [newCard].concat([...prevCards]));
  }

  function handleCardDeleteClick(cardId) {
    setIsCardDeleteOpened(true);
    setSelectedCard({ id: cardId });
  }

  function handleCardDelete(cardId) {
    setIsCardDeleteOpened(false);
    setCards((prevCards) => prevCards.filter((card) => card._id != cardId));
  }

  function handleUserLogin({ userId }) {
    setUserId(userId);
  }

  function handleCardLike(cardId, isLiked) {
    if (!isLiked) {
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
    } else {
      api.configRequest({
        resource: `/cards/likes/${cardId}`,
      });
      api.delete().then((newLikedCard) => {
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
  }

  return (
    <>
      <Profile
        onAddCardSubmit={handleAddCard}
        onUserLogin={handleUserLogin}
      ></Profile>
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
                showDeleteButton={card.owner._id === userId}
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
      {isCardDeleteOpened && (
        <PopupWithForm
          onClose={handlePopupCardClose}
          onSubmit={handleCardDelete}
        >
          <CardDeleteForm cardId={selectedCard.id}></CardDeleteForm>
        </PopupWithForm>
      )}
    </>
  );
}

export default Main;
