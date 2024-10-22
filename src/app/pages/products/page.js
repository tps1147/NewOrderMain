import React from 'react';
import ProductPage from '../../components/ProductPage'; // Import the ProductPage component
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../styles/page.module.css';
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Products() {
  return (
    <div className={playfairDisplay.className}>
      <Header />
      <main className={styles.main}>
        <ProductPage />
      </main>
      <Footer />
    </div>
  );
}
