import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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

const ProductInformation: React.FC = () => {
  const params = useParams();
  const { slug } = params;

  const [{ product }, dispatch] = useReducer(reducer, {
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
    <Container className="_container">
      <Tabs className="mb-4" fill>
        <Tab eventKey="Description" title="Description" tabClassName="tab_title">
          <p>{product.description}</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit
          ratione, mollitia qui error nemo temporibus assumenda vitae in. Vel
          perferendis accusantium, similique eligendi neque voluptatibus aliquid
          illum quam incidunt?
        </Tab>
        <Tab eventKey="Additional" title="Additional">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          laboriosam quos aliquid distinctio culpa reiciendis iure sed adipisci
          est quisquam, quo consequatur fuga vero obcaecati explicabo
          repudiandae corporis reprehenderit accusamus.
          <hr />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          porro quaerat laboriosam hic. Qui omnis ad reiciendis ullam vero.
          Quisquam laudantium iusto veniam facere molestias consectetur adipisci
          eos facilis eligendi?
        </Tab>
        <Tab eventKey="Shopping & Returns " title="Shopping & Returns ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          laboriosam quos aliquid distinctio culpa reiciendis iure sed adipisci
          est quisquam, quo consequatur fuga vero obcaecati explicabo
          repudiandae corporis reprehenderit accusamus.
          <hr />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          porro quaerat laboriosam hic. Qui omnis ad reiciendis ullam vero.
          Quisquam laudantium iusto veniam facere molestias consectetur adipisci
          eos facilis eligendi?
        </Tab>
        <Tab eventKey="Reviews" title="Reviews">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          laboriosam quos aliquid distinctio culpa reiciendis iure sed adipisci
          est quisquam, quo consequatur fuga vero obcaecati explicabo
          repudiandae corporis reprehenderit accusamus.
          <hr />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          porro quaerat laboriosam hic. Qui omnis ad reiciendis ullam vero.
          Quisquam laudantium iusto veniam facere molestias consectetur adipisci
          eos facilis eligendi?
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ProductInformation;
