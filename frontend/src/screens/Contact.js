import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactBanner from '../components/contact/ContactBanner';

const Contact = () => {
  return (
    <React.Fragment>
      <ContactBanner />
      <ContactForm />
    </React.Fragment>
  );
};

export default Contact;
