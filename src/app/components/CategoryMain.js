import React from 'react';
import styles from '../styles/CategoryMain.module.css';
import { Raleway, Playfair_Display } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weights: ['100', '400', '700', '900'],
});
const playfair_display = Playfair_Display({
    subsets: ['latin'],
    weights: ['400', '700', '900'],
    });




const CategoryMain = () => {
  const categories = [
    { id: 1, name: 'Casual Wear', image: '/monk3.png' },
    { id: 2, name: 'Formal Wear', image: '/formal.png' },
    { id: 3, name: 'Sportswear', image: '/athletic.png' },
    { id: 4, name: 'Accessories', image: '/hat.png' },
  ];

  return (
    <div className={styles.categoryMain}>
      <div className={styles.imageContainer}>
        <img src="/blueMonk.png" alt="Category" className={styles.categoryImage} /> {/* Replace with your actual image */}
      </div>
      <div className={styles.align}>
    <div className={raleway.className}>
      <div className={styles.categoryHeader}>Winter Wonderland</div>
      </div>
       <div className={styles.divider}></div>
        <div className={styles.categoryDescription}>
            <p>Winter Fashion - Primate style. Embrace your inner monkey</p>
        </div>
      <div className={styles.gridContainer}>
        {categories.map(category => (
          <div key={category.id} className={styles.categoryCard}>
             <img src={category.image} alt={category.name} className={styles.categorySmall} />
            <h3 className={styles.categoryName}>{category.name}</h3>
           
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMain;
