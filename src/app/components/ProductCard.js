import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Link href={`/products/${product.id}`}>
        <Image src={product.image} alt={product.name} width={250} height={250} />
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
