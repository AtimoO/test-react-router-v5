import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/header";

import { HomePage } from "../home-page/home-page";
import { LoginPage } from "../login-page/login-page";
import { ProtectedPage } from "../protected-page/protected-page";
import { ProtectedRoute } from "../protected-route/protected-route";
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
            <ProtectedRoute path="/products">
              <ProtectedPage />
            </ProtectedRoute>
            <Route path="/topics">
              <TopicsPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="*">
              <p>NOT FOUND</p>
            </Route>
          </Switch>
        </main>
      </div>
    </ProvideAuth>
  );
}

export default App;
