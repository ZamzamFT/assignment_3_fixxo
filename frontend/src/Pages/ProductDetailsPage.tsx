// Dependencies
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// Models
//import { IProduct } from '../Features/Models/IProduct';
//import ProductCard from '../Features/Components/ProductCard';
// Components
import BreadCrumb from '../Features/Layouts/BreadCrumb';
import ProductDetails from '../Features/Sections/ProductDetails';
import ProductInformation from '../Features/Sections/ProductInformation';
//import ProductDetails from '../Features/Sections/ProductDetails';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


const ProductDetailsPage: React.FC = () => {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error}, dispatch] = useReducer(reducer, {
    product: '',
    loading: true,
    error: '',
  }); 

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err: any) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <h1 className='page_title text-center clr-accent'>Get 25% OFF at the Fixxo Selection - Shop Now!</h1>
          <BreadCrumb currentPage={slug} />
          <ProductDetails />
          <ProductInformation />
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
