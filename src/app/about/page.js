'use client'
import React from 'react';

import AboutUs from '../components/AboutUs';

import styles from '../styles/page.module.css';


const MainPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
    
        <AboutUs />
       
      </main>
    </div>
  );
};

export default MainPage;
