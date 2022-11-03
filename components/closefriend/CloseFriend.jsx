import { userAgent } from "next/server";
import React from "react";
import styles from "./CloseFrienf.module.css";

export function CloseFriend({ user }) {
  return (
    <li className={styles.sidebarRegisterListItem}>
      <img
        src={user.profilePicture}
        alt=""
        className={styles.sidebarRegisterListImg}
      />
      <span className={styles.sidebarRegisterListName}>{user.username}</span>
    </li>
  );
}
