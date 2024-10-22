'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from '../styles/ProductList.module.css';

const mockProducts = [
  { id: 1, name: 'Banana Leaf Shirt', price: 39.99, image: '/monk.png', category: 'Tops' },
  { id: 2, name: 'Vine Swing Pants', price: 49.99, image: '/shaker.png', category: 'Bottoms' },
  { id: 3, name: 'Coconut Shell Sunglasses', price: 29.99, image: '/shaker1.png', category: 'Accessories' },
  { id: 4, name: 'Tropical Storm Jacket', price: 79.99, image: '/monk.png', category: 'Outerwear' },
  { id: 5, name: 'Monkey Paw Shoes', price: 59.99, image: '/shaker.png', category: 'Footwear' },
  { id: 6, name: 'Jungle Camo Backpack', price: 69.99, image: '/shaker1.png', category: 'Accessories' },
];

const ProductList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={styles.productList} ref={ref}>
      <div className={styles.backgroundElement}></div>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        variants={itemVariants}
      >
        Our Latest Collection
      </motion.h2>
      <motion.div 
        className={styles.productGrid}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {mockProducts.map((product) => (
          <motion.div 
            key={product.id} 
            className={styles.productCard}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.imageWrapper}>
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className={styles.productImage} />
              <motion.div 
                className={styles.categoryTag}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {product.category}
              </motion.div>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <motion.button 
                className={styles.addToCartButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductList;
