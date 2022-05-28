import React, { useCallback, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "../../utils/fakeApi";
import { useAuth } from "../provide-auth/provide-auth";
import styles from "./login-page.module.css";

export const LoginPage = () => {
  const [redirect, setRedirect] = useState(false);
  const { state } = useLocation();

  console.log(state);

  const login = (e) => {
    e.preventDefault();
    fakeAuth.signIn(() => {
      setRedirect(true);
    });
  };

  const logout = () => {
    fakeAuth.signOut(() => {
      setRedirect(false);
    });
  };

  if (redirect) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <h1 className={styles.heading}>Вход</h1>
        <input
          type="email"
          placeholder="Email"
          value={logout.email}
          name="email"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={logout.password}
          name="password"
        />
        <button onClick={login}>Войти</button>
        <button onClick={logout}>Закрыть</button>
      </div>
    </div>
  );
};
