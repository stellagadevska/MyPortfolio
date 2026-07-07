"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.png";
import { navLinks } from "@/data/site";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger toggler — hidden on desktop via CSS, shown on mobile. */}
      <button
        type='button'
        className={`${styles.navToggler} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span></span>
      </button>

      <div className={`${styles.aside} ${isOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <Image src={logo} width={35} height={35} alt='Portfolio logo' />
          <Link href='/' onClick={closeMenu}>
            Portfolio
          </Link>
        </div>
        <ul className={styles.nav}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? styles.active : ""}
                onClick={closeMenu}
              >
                {/* Font Awesome classes stay as plain global strings, not module
                    classes — the module targets them via :global(.fa) */}
                <i className={link.iconClass}></i> {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.copyrightText}>
          &copy; {currentYear} Stela Gadevska
        </div>
      </div>

      {/* Tap-to-close backdrop, only rendered while the mobile menu is open. */}
      {isOpen && (
        <button
          type='button'
          className={styles.backdrop}
          aria-label='Close menu'
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Sidebar;
