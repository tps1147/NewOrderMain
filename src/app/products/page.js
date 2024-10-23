import React from 'react';
import Products from './Products';
import ProductParallaxSection from '../components/ProductParallaxSection';
import CategoryMain from '../components/CategoryMain'; // Import the new component
import styles from '../styles/Products.module.css';

const productsData = [
  { id: 1, name: 'Banana Tee', price: 29.99, image: '/monk.png', description: 'A soft and comfortable tee made from eco-friendly materials.' },
  { id: 2, name: 'Jungle Tee', price: 25.99, image: '/monkH2.png', description: 'Perfect for summer adventures.' },
  { id: 3, name: 'Tropical Vibes Tee', price: 27.99, image: '/monkH.png', description: 'Feel the tropical vibes with this stylish tee.' },
  { id: 4, name: 'Sunset Tee', price: 24.99, image: '/sun1.png', description: 'A beautiful sunset design for your casual outings.' },
];

export default function ProductsPage() {
  return (
    <div className={styles.productsPage}>
      <ProductParallaxSection 
        imageUrl="/anotha.png" // Replace with your actual image URL
        title="The Collection"
        products={productsData}
      />
      <div className={styles.wood}>
        <Products />
      </div>
    </div>
  );
}
