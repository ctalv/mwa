import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
    return (
    <nav className={styles.navcontainer}>
        <div className={styles.navbar}>
            <div >
            <Image
          className={styles.navlogo}
          src="/MWA-logomark-saddle.png"
          alt="Splash image placeholder"
          width={1000}
          height={1000}
          priority
        />
            </div>
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
                </ul>
            </div>
        </div>
    </nav>
    );
  }