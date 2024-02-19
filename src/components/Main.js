import { useState } from "react";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import CardDeleteForm from "./CardDeleteForm";
import DeleteCardPopup from "./DeleteCardPopup";

function Main({ cards, onCardLike, onCardDelete }) {
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpened, setIsCardPopupOpened] = useState(false);
  const [isCardDeleteOpened, setIsCardDeleteOpened] = useState(false);

  function handleCardClick(card) {
    setIsCardPopupOpened(true);
    setSelectedCard(card);
  }

  function handlePopupCardClose() {
    setIsCardPopupOpened(false);
    setIsCardDeleteOpened(false);
  }

  function handleCardDelete(card) {
    setIsCardDeleteOpened(true);
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    onCardLike(card);
  }

  return (
    <>
      <main className="destinations page__destinations">
        <ul className="destinations__list">
          {cards.map((card, i) => (
            <li key={i} className="destinations__item">
              <Card
                card={card}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              ></Card>
            </li>
          ))}
        </ul>
      </main>
      {isCardPopupOpened && (
        <ImagePopup
          onClose={handlePopupCardClose}
          card={selectedCard}
        ></ImagePopup>
      )}
      <DeleteCardPopup
        isOpen={isCardDeleteOpened}
        onSubmit={onCardDelete}
        onClose={handlePopupCardClose}
        cardId={selectedCard._id}
      ></DeleteCardPopup>
    </>
  );
}

export default Main;
