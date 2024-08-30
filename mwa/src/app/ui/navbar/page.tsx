import Link from "next/link"
import styles from "./page.module.css"

export default function Page() {
    return (
    <nav className={styles.navcontainer}>
        <div className={styles.navbar}>
            <div className={styles.brand}></div>
            <div className={styles.navmenu}>
                <ul className={styles.navlist}>
                    <li className={styles.navitem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href="/client">Client</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }