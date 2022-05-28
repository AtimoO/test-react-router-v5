import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <ul className="app-links">
        <li>
          <a className="app-link" href="/">
            General page
          </a>
        </li>
        <li>
          <a className="app-link" href="/topics">
            Topics
          </a>
        </li>
        <li>
          <Link className="app-link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <a className="app-link" href="/login">
            Войти
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
