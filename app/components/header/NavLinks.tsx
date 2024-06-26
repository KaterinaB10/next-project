"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";

type NavLink = {
  label: string;
  href: string;
  icon: string;
  activeIcon: string;
};

type Properties = {
  navLinks: NavLink[];
};

export default function NavLink({ navLinks }: Properties) {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link key={link.label} href={link.href}>
            <Image
              src={isActive ? link.activeIcon : link.icon}
              alt={link.label}
              width={20}
              height={20}
            />
          </Link>
        );
      })}
    </>
  );
}
