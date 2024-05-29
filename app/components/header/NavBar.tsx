import { NavBtns } from "./NavBtns";
import { Logo } from "./Logo";
import styles from "./nav.module.css";

export function NavBar() {
  return (
    <header className={styles.header}>
      <Logo src="/images/icons/logo.png" alt="logo" />
      <NavBtns />
    </header>
  );
}
