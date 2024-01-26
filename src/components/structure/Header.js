import React from "react";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header page__header">
      <img
        id="image-logo"
        className="header__logo"
        src={logo}
        alt=" Around the U.S. logo"
      />
      <div className="header__division"></div>
    </header>
  );
}

export default Header;
