import React, { useRef, useState } from "react";
import styles from "./login-page.module.css";

export const LoginPage = () => {
  const login = "123";

  const [logout, setLogout] = useState(false);

  const ref = useRef();

  const checkLogin = (e) => {
    e.preventDefault();
    if (ref.current.value === login) {
      setLogout(!logout);
    }
  };

  const outClick = () => {
    setLogout(!logout);
  };

  return (
    <div className={styles.wrapper}>
      {(!logout && (
        <form className={styles.form}>
          <h1 className={styles.heading}>Вход</h1>
          <input ref={ref} type="text" name="login" id="login" />
          <button onClick={checkLogin} type="submit">
            Войти
          </button>
        </form>
      )) || (
        <>
          <div style={{ fontSize: 40 }}>Добро пожаловать!</div>
          <button onClick={outClick}>Выход</button>
        </>
      )}
    </div>
  );
};
