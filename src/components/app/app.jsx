import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/header";

import { HomePage } from "../home-page/home-page";
import { LoginPage } from "../login-page/login-page";
import { ProtectedPage } from "../protected-page/protected-page";
import { ProvideAuth } from "../provide-auth/provide-auth";
import { TopicsPage } from "../topics/topics-page";

import "./app.css";

function App() {
  return (
    <ProvideAuth>
      <div className="app">
        <Header />
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
    </ProvideAuth>
  );
}

export default App;
