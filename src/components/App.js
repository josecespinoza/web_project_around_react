import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import UserOptions from "./UserOptions";
import ImagePopup from "./ImagePopup";
import DeleteCardPopup from "./DeleteCardPopup";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpened, setIsCardPopupOpened] = useState(false);
  const [isCardDeleteOpened, setIsCardDeleteOpened] = useState(false);

  useEffect(() => {
    api
      .getCardList()
      .then((res) => {
        setCards(res);
      })
      .catch(() => {
        console.error("Couldn't load cards");
      });
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser({
          about: res.about,
          avatar: res.avatar,
          name: res.name,
          _id: res._id,
        });
      })
      .catch(() => {
        console.error("Couldn't get user info");
      });
  }, []);

  function closeAllPopups() {
    isEditProfilePopupOpen && setIsEditProfilePopupOpen(false);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(false);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(false);
    isCardPopupOpened && setIsCardPopupOpened(false);
    isCardDeleteOpened && setIsCardDeleteOpened(false);
  }

  /*Cards handlers*/
  function handleCardClick(card) {
    setIsCardPopupOpened(true);
    setSelectedCard(card);
  }

  function handleCardDeleteClick(card) {
    setIsCardDeleteOpened(true);
    setSelectedCard(card);
  }

  function handleCardDelete(cardId) {
    setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newLikedCard) => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card._id === newLikedCard._id ? newLikedCard : card
          )
        );
      })
      .catch(() => {
        console.error("Couldn't like card");
      });
  }

  /*UserOptions handlers*/

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  /*Forms handlers */
  function handleEditProfileSubmit(submitRes) {
    closeAllPopups();
    setCurrentUser(submitRes);
  }

  function handleEditAvatarSubmit(submitRes) {
    closeAllPopups();
    setCurrentUser(submitRes);
  }

  function handleAddCardSubmit(submitRes) {
    closeAllPopups();
    setCards((prevCards) => [submitRes].concat([...prevCards]));
  }

  return (
    <div className="page page_theme_dark">
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header></Header>

        <Main
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDeleteClick}
          onEditProfileClick={handleEditProfileClick}
          onEditAvatarClick={handleEditAvatarClick}
          onAddPlaceClick={handleAddPlaceClick}
        ></Main>
        <Footer></Footer>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onSubmit={handleAddCardSubmit}
          onClose={closeAllPopups}
        ></AddPlacePopup>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onSubmit={handleEditProfileSubmit}
          onClose={closeAllPopups}
        ></EditProfilePopup>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onSubmit={handleEditAvatarSubmit}
          onClose={closeAllPopups}
        ></EditAvatarPopup>
        {isCardPopupOpened && (
          <ImagePopup onClose={closeAllPopups} card={selectedCard}></ImagePopup>
        )}
        <DeleteCardPopup
          isOpen={isCardDeleteOpened}
          onSubmit={handleCardDelete}
          onClose={closeAllPopups}
          cardId={selectedCard._id}
        ></DeleteCardPopup>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
