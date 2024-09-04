import Image from "next/image";
import styles from "./page.module.css";


export default function Page() {
  return (
    <div className={styles.footer}>
      <div className={styles.footertop}>
        <div className={styles.footerlogodiv}>
          <a href="/"><Image
            className={styles.footerlogo}
            src="/MWA-main-logo-saddle.png"
            alt="Splash image placeholder"
            width={1000}
            height={1000}
            priority
          />
          </a>
        </div>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/matthewmitchellarchitecture/">
          <Image
          className={styles.socialslogo}
            src="/Instagram_icon.png"
            alt="Splash image placeholder"
            width={1000}
            height={1000}
            priority
          /></a>
          <a href="https://www.linkedin.com/company/matthew-mitchell-architecture/">
          <Image
          className={styles.socialslogo}
            src="/LI-In-Bug.png"
            alt="Splash image placeholder"
            width={1000}
            height={1000}
            priority
          /></a>
        </div>
      </div>
      <div className={styles.footerbottom}>
        Website by Claire Alverson
      </div>
    </div>
  );
}