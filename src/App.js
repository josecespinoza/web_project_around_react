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
      <template id="destination-popup-template">
        <div className="destination-popup">
          <img className="destination-popup__photo" />
          <p className="destination-popup__description"></p>
        </div>
      </template>
      <template id="popupImage-template">
        <img className="popup__photo" />
        <p className="popup__description"></p>
      </template>
      */}
    </div>
  );
}

export default App;
