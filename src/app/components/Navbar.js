import React from 'react';
import Link from 'next/link';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/pages/admin" className={styles.logoText}>EventLink</Link>
      </div>
      <div className={styles.navbarGroup}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/pages/meus-ingressos" className={styles.navLink}>Meus Ingressos</Link>
        <Link href="/pages/suporte" className={styles.navLink}>Suporte</Link>
        <Link href="/pages/login" className={styles.loginButton}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
