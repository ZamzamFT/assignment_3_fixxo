import React from 'react';
import BreadCrumb from '../Features/Layouts/BreadCrumb';
import { Helmet } from 'react-helmet-async';

const Products: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>Products | Fixxo.</title>
      </Helmet>
      <BreadCrumb currentPage="Products" />
    </>
  );
};

export default Products;
