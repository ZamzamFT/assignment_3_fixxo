// Dependencies
import React, { useEffect } from 'react';
// Components
// Models
import { IProduct } from '../Models/IProduct';
import ProductCard from '../Components/ProductCard';
// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useProductContext, IProductContext } from '../Contexts/ProductContext';

interface FeaturedProductsProps {
  title: string;
  product?: IProduct[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title }) => {
  const { getAllProducts, products, error, loading } =
    useProductContext() as IProductContext;

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="featured-products">
      <h1 className="heding_primery">{title}</h1>
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products.map((product: IProduct) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};
export default FeaturedProducts;
