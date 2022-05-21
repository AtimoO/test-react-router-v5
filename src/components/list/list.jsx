import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import listStyles from "./list.module.css";

const getChats = () => console.log('asd');

export const ListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getChatsData = async () => {
    // добавим состояние загрузки
    // большой объём данных может подгружаться довольно долго
    setLoading(true);
    try {
      const chats = await getChats();
      setData(chats);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // загрузим список чатов
    getChatsData();
  }, []);

  const content = loading ? (
    "loading"
  ) : data && data.length ? (
    {/* <ChatsList chats={data} /> */}
  ) : null;

  return (
    <div className={listStyles.container}>
      <div className={listStyles.list}>{content}</div>
      <p>List</p>
      <Link to='/go'>Go</Link>
    </div>
  );
};
