import React from 'react';
import Image from 'next/image';
import styles from '../styles/FeaturedProducts.module.css';

const FeaturedProducts = () => {
  const featuredItems = [
    { id: 1, name: 'Banana Tee', price: 29.99, image: '/monk.png' },
    { id: 2, name: 'Jungle Hoodie', price: 59.99, image: '/shaker.png' },
    { id: 3, name: 'Monkey Business Suit', price: 199.99, image: '/shaker1.png' },
  ];

  return (
    <section className={styles.featured}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.productGrid}>
        {featuredItems.map((item, index) => (
          <div key={item.id} className={`${styles.productCard} ${styles['card' + (index + 1)]}`}>
            <div className={styles.imageWrapper}>
              <Image 
                src={item.image} 
                alt={item.name} 
                layout="fill" 
                objectFit="cover" 
                className={styles.productImage} 
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{item.name}</h3>
              <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
