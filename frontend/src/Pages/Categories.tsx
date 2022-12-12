import React from 'react';
import BreadCrumb from '../Features/Layouts/BreadCrumb';
import { Helmet } from 'react-helmet-async';


const Categories: React.FC = () => {

  return (

    <>
    <Helmet>
        <title>Categories | Fixxo.</title>
      </Helmet>
      <BreadCrumb currentPage="Categories" />
    </>
  );
};

export default Categories;
