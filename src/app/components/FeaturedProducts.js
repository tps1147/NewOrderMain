import React from 'react';
import Image from 'next/image';
import styles from '../styles/FeaturedProducts.module.css';

const FeaturedProducts = () => {
  const featuredItems = [
    { id: 1, name: 'Banana Tee', price: 29.99, image: '/monk.png' },
    { id: 2, name: 'Jungle Hoodie', price: 59.99, image: '/shaker.png' },
    { id: 3, name: 'Monkey Business Suit', price: 199.99, image: '/shaker1.png' },
    { id: 4, name: 'Coconut Bag', price: 39.99, image: '/shirt2.jpg' },
    { id: 5, name: 'Main Product', price: 99.99, image: '/shirt3.png', isMain: true },
  ];

  return (
    <section className={styles.featured}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.productContainer}>
        <div className={styles.productGrid}>
 
          {featuredItems.slice(0, 4).map((item) => (
            <div key={item.id} className={styles.productCard}>
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
        <div className={styles.mainProduct}>
          {/* <h3 className={styles.specialOfferTitle}>Special Offer</h3> Title for the right section */}
          {featuredItems.find(item => item.isMain) && (
            <div className={styles.productCardLarge} style={{ height: '300px' }}>
              <div className={styles.imageWrapperLarge}>
                <Image 
                  src={featuredItems.find(item => item.isMain).image} 
                  alt={featuredItems.find(item => item.isMain).name} 
                  layout="fill" 
                  objectFit="cover" 
                  className={styles.productImage} 
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{featuredItems.find(item => item.isMain).name}</h3>
                <p className={styles.productPrice}>${featuredItems.find(item => item.isMain).price.toFixed(2)}</p>
                <button className={styles.addToCartButton}>Add to Cart</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
