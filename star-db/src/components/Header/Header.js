import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav nav-pills">
      <Link className="nav-link" to="/">
        Главная
      </Link>
      <Link className="nav-link " to="/planets">
        Планеты
      </Link>
      <Link className="nav-link" to="/people">
        Персонажи
      </Link>
    </nav>
  );
};

export default Header;
