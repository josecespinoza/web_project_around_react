import { useState, useEffect, useContext } from "react";
import { api } from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import Profile from "./Profile";
import PopupWithForm from "./PopupWithForm";
import CardDeleteForm from "./CardDeleteForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpened, setIsCardPopupOpened] = useState(false);
  const [isCardDeleteOpened, setIsCardDeleteOpened] = useState(false);
  const [userId, setUserId] = useState("");

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .loadCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.error("Couldn't load cards"));
  }, []);

  function handleCardClick(name, imageLink) {
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

  function handleCardDelete(cardId) {
    setIsCardDeleteOpened(false);
    setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
  }

  function handleCardDeleteClick(cardId) {
    setIsCardDeleteOpened(true);
    setSelectedCard({ id: cardId });
  }

  function handleUserLogin({ userId }) {
    setUserId(userId);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newLikedCard) => {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card._id === newLikedCard._id ? newLikedCard : card
        )
      );
    });
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
                card={card}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDeleteClick}
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
