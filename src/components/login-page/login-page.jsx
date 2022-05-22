import React, { useCallback, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../provide-auth/provide-auth";
import styles from "./login-page.module.css";

export const LoginPage = () => {
  const history = useHistory();
  const auth = useAuth();
  const [logout, setLogout] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setLogout({ ...logout, [e.target.name]: e.target.value });
  };

  const login = useCallback(
    (e) => {
      e.preventDefault();
      auth.signIn(() => {
        history.replace({ pathname: "/topics" });
      });
    },
    [auth, history]
  );

  if (auth.user) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Вход</h1>
        <input
          type="email"
          placeholder="Email"
          value={logout.email}
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={logout.password}
          name="password"
          onChange={onChange}
        />
        <button onClick={login}>Войти</button>
      </form>
    </div>
  );
};
