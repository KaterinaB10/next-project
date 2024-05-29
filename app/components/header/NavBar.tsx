import { NavBtns } from "./NavBtns";
import styles from "./nav.module.css";

export function NavBar() {
  return (
    <header className={styles.header}>
      <NavBtns />
    </header>
  );
}
