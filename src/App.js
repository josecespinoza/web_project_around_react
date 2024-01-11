import "./index.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page page_theme_dark">
      <Header></Header>
      <Profile></Profile>
      <Main></Main>
      <Footer></Footer>
      {/*
      <template id="destinations__item-template">
        <li className="destinations__item">
          <div className="destination">
            <img className="destination__photo" />
            <button className="button button_theme_dark button_action_delete button_location_destination-photo">
              <span className="button__icon button__icon_action_delete"></span>
            </button>
            <div className="destination__info destination__info_theme_dark">
              <p className="destination__name"></p>
              <div className="like destination__like">
                <button className="button button_theme_dark button_action_like">
                  <span className="button__icon button__icon_action_like"></span>
                </button>
                <p className="like__counter"></p>
              </div>
            </div>
          </div>
        </li>
      </template>
      <template id="modal-template">
        <div className="modal-container" tabIndex="10">
          <div className="modal-container__content"></div>
          <div className="modal-container__close-button">
            <button className="button button_theme_dark button_action_close">
              <span className="button__icon button__icon_action_close"></span>
            </button>
          </div>
          <div className="modal-container__backdrop"></div>
        </div>
      </template>
      <template id="destination-popup-template">
        <div className="destination-popup">
          <img className="destination-popup__photo" />
          <p className="destination-popup__description"></p>
        </div>
      </template>
      <template id="popup-template">
        <div className="popup" tabIndex="10">
          <div className="popup__content"></div>
          <div className="popup__close-button">
            <button className="button button_theme_dark button_action_close">
              <span className="button__icon button__icon_action_close"></span>
            </button>
          </div>
          <div className="popup__backdrop"></div>
        </div>
      </template>
      <template id="popupImage-template">
        <img className="popup__photo" />
        <p className="popup__description"></p>
      </template>
      <template id="form-template">
        <form className="form form_theme_dark" noValidate>
          <h2 className="form__title"></h2>
          <div className="form__inputs"></div>
          <button className="button button_theme_light button_action_save button_location_form">
            Guardar
          </button>
        </form>
      </template>
      <template id="form__input-template">
        <fieldset className="form__input-set">
          <input
            className="form__input"
            type=""
            name=""
            placeholder=""
            maxLength=""
            minLength=""
            required={false}
          />
          <span className="form__input-error"></span>
        </fieldset>
      </template>
      */}
    </div>
  );
}

export default App;
