import React from "react";
import { api } from "../../utils/api";
import Card from "../Card/Card";
import ImagePopup from "../ImagePopup/ImagePopup";

function Main() {
  const [cards, setCards] = React.useState([]);
  const [openedCard, setOpenedCard] = React.useState({});
  const [isCardPopupOpened, setIsCardPopupOpened] = React.useState(false);

  React.useEffect(() => {
    api.configRequest("cards");
    api.get().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardClick({ name, imageLink }) {
    setIsCardPopupOpened(true);
    setOpenedCard({
      name,
      imageLink,
    });
  }

  function handlePopupCardClose() {
    setIsCardPopupOpened(false);
  }

  return (
    <>
      <main className="destinations page__destinations">
        <ul className="destinations__list">
          {cards.map((card, i) => (
            <li key={i} className="destinations__item">
              <Card
                name={card.name}
                imageLink={card.link}
                onCardClick={handleCardClick}
              ></Card>
            </li>
          ))}
        </ul>
      </main>
      {isCardPopupOpened && (
        <ImagePopup
          onClose={handlePopupCardClose}
          name={openedCard.name}
          imageLink={openedCard.imageLink}
        ></ImagePopup>
      )}
    </>
  );
}

export default Main;
