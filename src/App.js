import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { api } from "./utils/api";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser({
        about: res.about,
        avatar: res.avatar,
        name: res.name,
        _id: res._id,
      });
    });
  }, []);

  return (
    <div className="page page_theme_dark">
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
