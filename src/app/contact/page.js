import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from '../styles/page.module.css'; // Import any global styles if needed

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <p>You know what to do</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

