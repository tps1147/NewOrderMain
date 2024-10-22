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

export default function Home() {
  return (
    <div className={styles.container}>
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
