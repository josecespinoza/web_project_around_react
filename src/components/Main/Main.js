import React from "react";
import { api } from "../../utils/api";
import Card from "../Card/Card";

function Main() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.configRequest("cards");
    api.get().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardClick() {
    console.log("card was clicked");
  }

  return (
    <main>
      <main className="destinations page__destinations">
        <ul className="destinations__list">
          {cards.map((card, i) => (
            <li key={i} className="destinations__item">
              <Card
                name={card.name}
                imageLink={card.link}
                onClick={handleCardClick}
              ></Card>
            </li>
          ))}
        </ul>
      </main>
    </main>
  );
}

export default Main;
