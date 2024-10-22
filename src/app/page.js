'use client'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage'; // Import the ProductPage component
import styles from './styles/page.module.css';
import { Poppins, Playfair_Display } from 'next/font/google'; // Correct import path
import ParallaxSection from './components/ParallaxSection';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});

export default function Home() {
  return (
    <div className={playfairDisplay.className}>
      <Header />
      <main className={styles.main}>
        <ParallaxSection 
          imageUrl="/many.png"
          title="The Shak"
          description="Attire for the Modern Monkey"
        />
        <FeaturedProducts />
        <AboutUs />
        <ProductList />
        <ParallaxSection 
          imageUrl="/monkey.png"
          title="Join the Monkey Business"
          description="Unleash your wild side with our exclusive collection"
          isBottom={true}
        />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
