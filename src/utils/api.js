import { getCookie } from "./functions";

export const loginRequest = async (form) => {
  return await fetch("https://cosmic.nomoreparties.space/login", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

// отправляем запрос на роут аутентификации
export const getChatsRequest = async () =>
  await fetch("https://cosmic.nomoreparties.space/api/chat", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // Отправляем токен и схему авторизации в заголовке при запросе данных
      Authorization: "Bearer " + getCookie("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
