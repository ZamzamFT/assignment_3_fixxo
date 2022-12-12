import React from 'react';
import BreadCrumb from '../Features/Layouts/BreadCrumb';
import Map from '../Features/Components/Map';
import ContactForm from '../Features/Components/ContactForm';
import { Helmet } from 'react-helmet-async';


const Contact: React.FC = () => {

  return (
    <>
    <Helmet>
        <title>Contact | Fixxo.</title>
      </Helmet>
      <BreadCrumb currentPage="Contacts" />
      <Map />
      <ContactForm />
    </>
  );
};

export default Contact;
