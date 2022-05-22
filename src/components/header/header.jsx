import React from "react";

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
          <a className="app-link" href="/products">
            Products
          </a>
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
