import React from "react";
import styles from "./Layout.module.css";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Main } from "../main/Main";

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layoutWrapper}>
        <div className={styles.sidebarWrapper}>
          <Sidebar />
        </div>
        <div className={styles.mainWrapper}>
          <Main />
        </div>
      </div>
    </div>
  );
}
