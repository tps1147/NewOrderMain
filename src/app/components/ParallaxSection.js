'use client'
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';
import styles from '../styles/ParallaxSection.module.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify the weights you need
});

const ParallaxSection = ({ imageUrl, title, description, tagline, features, ctaText, ctaLink, isBottom = false, backgroundPosition = 'center' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div ref={ref} className={`${styles.parallax} ${isBottom ? styles.bottomParallax : ''}`} style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: backgroundPosition }}>
      <div className={`${styles.overlay} ${styles.gradientOverlay}`}></div>
      <motion.div 
        className={styles.parallaxContent}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <span className={raleway.className}>
          <motion.h1 className={`${styles.title} ${styles.mainTitle}`} variants={itemVariants} initial={{ x: -100 }} animate={inView ? { x: 0 } : { x: -100 }}>{title}</motion.h1>
        </span>
        {tagline && (
          <motion.p className={`${styles.tagline} ${raleway.className}`} variants={itemVariants}>
            {tagline}
          </motion.p>
        )}
        {description && (
          <motion.p className={styles.description} variants={itemVariants}>
            {description}
          </motion.p>
        )}
        
        {ctaText && ctaLink && (
          <motion.div variants={itemVariants}>
            <Link href={ctaLink} className={`${styles.ctaButton} ${styles.hoverEffect}`}>
              {ctaText}
            </Link>
          </motion.div>
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
        </div>
      )}
      <div className={styles.cardOverlay}>
        {/* Cards will be rendered here */}
      </div>
    </div>
  );
};

export default ParallaxSection;
