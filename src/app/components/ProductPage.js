import React from 'react';
import styles from '../styles/ProductPage.module.css';

const products = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (Math.random() * 100).toFixed(2),
  imageUrl: '/placeholder.png', // Use a placeholder image
}));

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productPrice}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
