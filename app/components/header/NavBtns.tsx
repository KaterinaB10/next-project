import NavLink from "./NavLinks";
import styles from "./nav.module.css";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: "/images/icons/home-disactive.png",
    activeIcon: "/images/icons/home-active.png",
  },
  {
    label: "Shopping Card",
    href: "/shopping-card",
    icon: "/images/icons/shopping-card-disactive.png",
    activeIcon: "/images/icons/shopping-card-active.png",
  },
];

const NavBtns = () => {
  return (
    <div className={styles.btnContainer}>
      <NavLink navLinks={navItems} />
    </div>
  );
};

export { NavBtns };
