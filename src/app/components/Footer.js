import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
        <Image 
            src="/shak.png" 
            alt="ClothBrand Logo" 
            width={100} 
            height={100} 
            className={styles.logoImage}
          />
        </div>
        
        
        <nav className={styles.nav}>
        <div className={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© 2023 YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
