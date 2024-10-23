'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styles from '../styles/Products.module.css';
import CategoryMain from '../components/CategoryMain';

const Products = () => {
  const products = {
    tShirts: [
      { id: 1, name: 'Banana Tee', price: 29.99, image: '/monk.png', description: 'A soft and comfortable tee made from eco-friendly materials.' },
      { id: 2, name: 'Jungle Tee', price: 25.99, image: '/monkH2.png', description: 'Perfect for summer adventures.' },
      { id: 3, name: 'Tropical Vibes Tee', price: 27.99, image: '/monkH.png', description: 'Feel the tropical vibes with this stylish tee.' },
      { id: 4, name: 'Sunset Tee', price: 24.99, image: '/sunset_tee.png', description: 'A beautiful sunset design for your casual outings.' },
    ],
    hoodies: [
      { id: 5, name: 'Jungle Hoodie', price: 59.99, image: '/shaker.png', description: 'Stay warm and stylish with our jungle-inspired hoodie.' },
      { id: 6, name: 'Monkey Business Hoodie', price: 69.99, image: '/line.png', description: 'A cozy hoodie for all occasions.' },
      { id: 7, name: 'Adventure Hoodie', price: 65.99, image: '/adventure_hoodie.png', description: 'Perfect for your next adventure in the wild.' },
      { id: 8, name: 'Chill Hoodie', price: 55.99, image: '/chill_hoodie.png', description: 'Stay chill with this comfortable hoodie.' },
    ],
    accessories: [
      { id: 9, name: 'Coconut Bag', price: 39.99, image: '/sun1.png', description: 'A versatile bag made from sustainable materials.' },
      { id: 10, name: 'Monkey Cap', price: 19.99, image: '/sun2.png', description: 'Keep the sun out with style.' },
      { id: 11, name: 'Tropical Sunglasses', price: 15.99, image: '/sun3.png', description: 'Protect your eyes with these stylish sunglasses.' },
      { id: 12, name: 'Beach Towel', price: 29.99, image: '/sun4.png', description: 'A soft towel for your beach days.' },
      { id: 13, name: 'Palm Leaf Tote', price: 34.99, image: '/sun5.png', description: 'A stylish tote made from palm leaves, perfect for shopping.' },
      { id: 14, name: 'Safari Hat', price: 24.99, image: '/sun6.png', description: 'Stay protected from the sun with this fashionable safari hat.' },
      { id: 15, name: 'Ocean Blue Sunglasses', price: 18.99, image: '/sun7.png', description: 'Stylish sunglasses with ocean blue lenses for a trendy look.' },
      { id: 16, name: 'Tropical Beach Blanket', price: 32.99, image: '/sun8.png', description: 'A large beach blanket for your sunny outings.' },
    ],
  };

  return (
    <div className={styles.productsPage}>
     
      <CategoryMain />
      
      <div className={styles.woodLayout}>
      {Object.entries(products).map(([category, items]) => (
        <section key={category} className={`${styles.categorySection} ${styles[category]}`}>
          <h2 className={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={5} // Show 2 items at a time
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {items.map(item => (
              <SwiperSlide key={item.id}>
                <div className={styles.productCard}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </div>
    </div>
  );
};

export default Products;
