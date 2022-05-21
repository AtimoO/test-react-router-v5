import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { topics } from "../../utils/constants";
import { TopicItem } from "../topic-item/topic-item";
import styles from "./topic-page.module.css";

export const TopicPage = () => {
  const { topicId } = useParams();
  const { path, url } = useRouteMatch(); // path для вложенного маршрута

  const topic = topics.find(({ id }) => id === topicId);

  console.log(path)

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{topic.name}1</h2>
      <p>{topic.description}</p>
      <ul className={styles.links}>
        {topic.resoutces.map((item) => (
          <li key={item.id}>
            <a className={styles.link} href={`${url}/${item.id}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <Route path={`${path}/:subId`}>
        <TopicItem />
      </Route>
    </div>
  );
};
