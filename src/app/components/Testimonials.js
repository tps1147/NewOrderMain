import React from 'react';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'King Kong', quote: "Finally, clothes that fit my larger-than-life personality!" },
    { id: 2, name: 'Curious George', quote: "The Shak's outfits are perfect for all my adventures." },
    { id: 3, name: 'Dr. Zaius', quote: "Sophisticated yet comfortable. Ideal for any planet of the apes." },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <p>"{testimonial.quote}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
