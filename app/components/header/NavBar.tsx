import { NavBtns } from "./NavBtns";
import { Logo } from "./Logo";
import styles from "./nav.module.css";

export function NavBar() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBtns />
    </header>
  );
}
