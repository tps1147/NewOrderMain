import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
        <div className={styles.logoContainer}>
          <Link href="/">
            <img src="/shak.png" alt="Logo" className={styles.logo} /> {/* Replace with your logo path */}
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
