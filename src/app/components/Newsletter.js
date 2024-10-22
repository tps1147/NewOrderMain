import React from 'react';
import styles from '../styles/Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2>Join Our Troop</h2>
      <p>Subscribe to our newsletter for exclusive offers and banana-peeling fashion tips!</p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
