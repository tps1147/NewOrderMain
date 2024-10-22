'use client'
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from '../styles/ParallaxSection.module.css';

const ParallaxSection = ({ imageUrl, title, description, isBottom = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const splitTitle = title.split(' ').map((word, index) => (
    <motion.span
      key={index}
      className={styles.titleWord}
      variants={wordVariants}
    >
      {word}
    </motion.span>
  ));

  return (
    <div ref={ref} className={`${styles.parallax} ${isBottom ? styles.bottomParallax : ''}`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.overlay}></div>
      <motion.div 
        className={styles.parallaxContent}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <h1 className={styles.title}>{splitTitle}</h1>
        {description && (
          <motion.p
            className={styles.description}
            variants={wordVariants}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
      {isBottom && (
        <div className={styles.jungleElements}>
          <motion.div
            className={styles.leaf1}
            animate={{
              rotate: [0, 10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className={styles.leaf2}
            animate={{
              rotate: [0, -10, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className={styles.monkey}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>
      )}
    </div>
  );
};

export default ParallaxSection;
