import React from "react";
import { Post } from "../post/Post";
import styles from "./Main.module.css";

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.scroll_bar}>
          <Post />
        </div>
      </div>
    </div>
  );
}
