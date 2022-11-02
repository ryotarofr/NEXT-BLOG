import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import HowToRegIcon from "@mui/icons-material/HowToReg";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <HomeIcon className={styles.sidebarIcon} />
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <span className={styles.sidebarListItemText}>ホーム</span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <TimelineIcon className={styles.sidebarIcon} />
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <span className={styles.sidebarListItemText}>ストーリー</span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <HowToRegIcon className={styles.sidebarIcon} />
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <span className={styles.sidebarListItemText}>登録チャンネル</span>
            </Link>
          </li>
        </ul>
        <hr className={styles.sidebarHr} />
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <HomeIcon className={styles.sidebarIcon} />
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <span className={styles.sidebarListItemText}>お気に入り</span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <HomeIcon className={styles.sidebarIcon} />
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <span className={styles.sidebarListItemText}>履歴</span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <HomeIcon className={styles.sidebarIcon} />
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <span className={styles.sidebarListItemText}>自分の投稿</span>
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <HomeIcon className={styles.sidebarIcon} />
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <span className={styles.sidebarListItemText}>後で見る</span>
            </Link>
          </li>
        </ul>
        <hr className={styles.sidebarHr} />
        {/* 登録チャンネル */}
      </div>
    </div>
  );
}
