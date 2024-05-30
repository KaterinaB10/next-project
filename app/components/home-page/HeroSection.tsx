import { openSans } from "../../fonts/openSans";
import styles from "./heroSection.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={openSans.className}>Choose your favorite taste</h1>
        <h3>using our ordering platform.</h3>
      </div>
    </section>
  );
}
