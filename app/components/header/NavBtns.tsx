import NavLink from "./NavLinks";
import styles from "./nav.module.css";

const navItems = [
  { label: "Home", href: "/", icon: "/images/icons/home-disactive.png" },
  {
    label: "Shopping Card",
    href: "/shopping-card",
    icon: "/images/icons/shopping-card-disactive.png",
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
