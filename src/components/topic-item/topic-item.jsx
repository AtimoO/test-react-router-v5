import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { topics } from "../../utils/constants";
import styles from "./topic-item.module.css";

export const TopicItem = () => {
  const { topicId, subId } = useParams();
  const { path, url } = useRouteMatch(); // path для вложенного маршрута

  const topic = topics
    .find(({ id }) => id === topicId)
    .resoutces.find(({ id }) => id === subId);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{topic.name}</h2>
      <p>{topic.description}</p>
      <a href={topic.url}>More info</a>
    </div>
  );
};
