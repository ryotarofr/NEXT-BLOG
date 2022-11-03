import React from "react";
import styles from "./Post.module.css";

export function Post() {
  {
    return (
      <div className={styles.post}>
        <div className={styles.postWrapper}>
          <img src="/thumbnail/1.jpg" alt="" className={styles.postImg} />
          <span className={styles.postTitle}>ここにタイトルを入力</span>
        </div>
      </div>
    );
  }
}
