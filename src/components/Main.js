import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import UserOptions from "./UserOptions";
import { useContext } from "react";

function Main({
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
  onEditProfileClick,
  onEditAvatarClick,
  onAddPlaceClick,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <UserOptions
        currentUser={currentUser}
        onEditProfileClick={onEditProfileClick}
        onEditAvatarClick={onEditAvatarClick}
        onAddPlaceClick={onAddPlaceClick}
      ></UserOptions>
      <main className="destinations page__destinations">
        <ul className="destinations__list">
          {cards.map((card, i) => (
            <li key={i} className="destinations__item">
              <Card
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              ></Card>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Main;
