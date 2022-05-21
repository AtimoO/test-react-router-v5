import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { HomePage } from "../home-page/home-page";
import { LoginPage } from "../login-page/login-page";
import { ProtectedPage } from "../protected-page/protected-page";
import { TopicsPage } from "../topics/topics-page";

import "./app.css";

function App() {
  return (
    <div className="app">
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
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" exact>
            <ProtectedPage />
          </Route>
          <Route path="/topics">
            <TopicsPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
