'use client'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ParallaxSection from './components/ParallaxSection';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import styles from './styles/page.module.css';
import ProductCard from './components/ProductCard'; // Assuming you have a Card component

const MainPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ParallaxSection 
          imageUrl="/newMain.png"
          title="The Shak"
          description="Attire for the Modern Monkey"
          tagline="Clothing - Accessories - Adventure"
          features={[
            "Eco-friendly Materials",
            "Jungle-tested Durability",
            "Banana-soft Comfort"
          ]}
          ctaText="Shop Now"
          ctaLink="/products"
          backgroundPosition="center" // Centered background for the top section
        />
        <FeaturedProducts />
        <AboutUs />
        <div className={styles.productOverlay}>
          <ProductList />
        </div>
        <ParallaxSection 
          imageUrl="/anotha.png"
          title="Join the Monkey Business"
          description="Unleash your wild side with our exclusive collection"
          isBottom={true}
          backgroundPosition="bottom" // Bottom positioned background for the bottom section
        />
        <Newsletter />
      </main>
    </div>
  );
};

export default MainPage;
