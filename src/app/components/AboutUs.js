import React from 'react';
import Image from 'next/image';
import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.imageContainer}>
        <Image src="/shak2.png" alt="About The Shak" layout="fill" objectFit="cover" className={styles.image} />
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>About The Shak</h2>
        <p className={styles.description}>
          Born from the wild imagination of fashion-forward primates, The Shak brings you attire that's as comfortable in the urban jungle as it is in the actual jungle. Our mission is to provide stylish, durable, and ethically-sourced clothing for the modern monkey in all of us.
        </p>
        <ul className={styles.features}>
          <li>Eco-friendly materials</li>
          <li>Designed for adventure</li>
          <li>Primate-approved comfort</li>
        </ul>
        <button className={styles.ctaButton}>Discover Our Story</button>
      </div>
    </section>
  );
};

export default AboutUs;
