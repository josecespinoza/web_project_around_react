import "./index.css";
import Header from "./components/structure/Header";
import Main from "./components/structure/Main";
import Footer from "./components/structure/Footer";

function App() {
  return (
    <div className="page page_theme_dark">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
