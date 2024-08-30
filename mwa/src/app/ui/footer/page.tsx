import styles from "./page.module.css"

export default function Page() {
    return (
      <div className={styles.footer}>
        <div className={styles.footertop}>
          <div className={styles.logo}>
            Logo
          </div>
          <div className={styles.socials}>
            Socials
          </div>
        </div>
        <div className={styles.footerbottom}>
          Website by Claire Alverson
        </div>
      </div>
    );
  }