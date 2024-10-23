'use client'
import React from 'react';
import styles from '../styles/ProductParallaxSection.module.css';

const ProductParallaxSection = ({ imageUrl, title, products }) => {
  return (
    <div className={styles.parallax} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.productGrid}>
          {products.map(item => (
            <div key={item.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.name} className={styles.productImage} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productDescription}>{item.description}</p>
                <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
                <button className={styles.addToCartButton}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductParallaxSection;
