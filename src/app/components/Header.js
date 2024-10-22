import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/products">Products</Link></li> {/* New link to Products page */}
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
