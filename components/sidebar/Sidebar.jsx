import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import React from 'react'
import styles from "./Sidebar.module.css"

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarWrapper}>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>
                        <HomeIcon className={styles.sidebarIcon} />
                        <Link href="/" style={{ textDecoration: "none", color: "black" }} >
                            <span className={styles.sideListItemText}>ホーム</span>
                        </Link>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <HomeIcon className={styles.sidebarIcon} />
                        <Link href="/" style={{ textDecoration: "none", color: "black" }} >
                            <span className={styles.sideListItemText}>ホーム</span>
                        </Link>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <HomeIcon className={styles.sidebarIcon} />
                        <Link href="/" style={{ textDecoration: "none", color: "black" }} >
                            <span className={styles.sideListItemText}>ホーム</span>
                        </Link>
                    </li>
                </ul>
                <hr className={styles.sidebarHr} />
            </div>
        </div>
    )
}