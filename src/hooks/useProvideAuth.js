import { useState } from "react";
import { loginRequest } from "../utils/api";
import { fakeAuth } from "../utils/fakeApi";
import { deleteCookie, setCookie } from "../utils/functions";

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signIn = async (form) => {
    const data = await loginRequest(form)
      .then((res) => {
        let authToken;
        // Ищем интересующий нас заголовок
        res.headers.forEach((header) => {
          if (header.indexOf("Bearer") === 0) {
            // Отделяем схему авторизации от "полезной нагрузки токена",
            // Стараемся экономить память в куках (доступно 4кб)
            authToken = header.split("Bearer ")[1];
          }
        });
        if (authToken) {
          // Сохраняем токен в куку token
          setCookie("token", authToken);
        }
        return res.json();
      })
      .then((data) => data);

    if (data.success) {
      // Сохраняем пользователя в состояние приложения и нормализуем поле id (_id => id)
      setUser({ ...data.user, id: data.user._id });
    }
  };

  const signOut = async () => {
    // Отправляем запрос на сервер
    await loginRequest();
    // Удаляем пользователя из хранилища
    setUser(null);
    // Удаляем куку token
    deleteCookie("token");
  };

  return {
    user,
    signIn,
    signOut,
  };
}
