import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { topics } from "../../utils/constants";
import { TopicPage } from "../topic/topic-page";
import styles from "./topics-page.module.css";

export const TopicsPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Topics page</h1>
      <ul className={styles.links}>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <a className={styles.link} href={`${url}/${id}`}>
              {name}
            </a>
          </li>
        ))}
      </ul>

      <Route path={`${path}/:topicId`}>
        <TopicPage />
      </Route>
    </div>
  );
};
