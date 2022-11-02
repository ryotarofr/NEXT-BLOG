import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <Link href="/">
          <span className={styles.logo}>FR NEXT WEB</span>
        </Link>
      </div>
      <div className={styles.headerCenter}>
        <div className={styles.searchbar}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="検索"
          />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerIcomItems}>
          <div className={styles.headerIconItem}>
            <NotificationsNoneIcon className={styles.notificationsNoneIcon} />
            <span className={styles.headerIconBadge}>1</span>
          </div>
          <img src="/person/1.png" alt="" className={styles.headerImg} />
        </div>
      </div>
    </div>
  );
}
