// Dependencies
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
//import logger from 'use-reducer-logger';
// Models
import { IProduct } from '../Models/IProduct';
// Components
import GeneralButton from '../Components/Buttons/GeneralButton';
import ProductCard from '../Components/ProductCard';
// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

interface Props {
  title: String;
  direction: string;
  jc: string;
  sectionTitle?: string;
  product?: IProduct[];
}

const DiscountSection: React.FC<Props> = ({
  title,
  direction,
  jc,
  sectionTitle,
}) => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: '',
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err: any) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <section className={`section justify-content-${jc}`}>
      <div className={`flex-container flex-${direction}`}>
        <h1>{sectionTitle}</h1>
        <div className="discount-info">
          <h2>{title}</h2>
          <GeneralButton
            link="/products"
            styleling="sale-btn"
            title="FINAL SALE"
          />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row className="product-grid">
            {products.map((product: IProduct) => (
              <Col key={product.slug} sm={1} md={2} lg={5} className="mb-3">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </section>
  );
};

export default DiscountSection;
