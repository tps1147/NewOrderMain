import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/shak.png" 
            alt="ClothBrand Logo" 
            width={100} 
            height={100} 
            className={styles.logoImage}
          />
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/products" className={styles.navLink}>
              Products
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cart" className={styles.navLink}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
