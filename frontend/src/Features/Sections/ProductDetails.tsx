import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import RatingComponent from '../Components/RatingComponent';
import GeneralButton from '../Components/Buttons/GeneralButton';
import ExternalLinkIcon from '../Components/ExternalLinkIcon';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import DropDown from 'react-bootstrap/DropDown';
import { Helmet } from 'react-helmet-async';
import { CurrencyFormatter } from '../Utilities/CurrencyFormatter';

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

const ProductDetails: React.FC = () => {
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
    <div>
      <Row className="_product_overview">
        <Col md={6} className="grid_container">
          <div className="main_img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="side_img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="side_img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="side_img">
            <img src={product.image} alt={product.name} />
          </div>
        </Col>

        <Col md={6} className="product_detail_wraper">
          <ListGroup variant="flush">
            <ListGroup.Item className="border-0">
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item className="product_brand border-0">
              <p>
                {`SKU: ${product._id}`}
                <span className="brand">{`BRAND: ${product.brand}`}</span>
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="_rating border-0">
              <RatingComponent
                rating={product.rating}
                numReviews={product.numReviews}
              />
            </ListGroup.Item>
            <ListGroup.Item className="product_price border-0">
              <p>{CurrencyFormatter(product.price)}</p>
            </ListGroup.Item>
            <ListGroup.Item className="_description border-0">
              <p>{product.description}</p>
            </ListGroup.Item>
            <ListGroup.Item className=" border-0">
              <span className="label">Size:</span>
              <ButtonGroup className="product_sizes">
                <Button className="_button">S</Button>
                <Button className="_button">M</Button>
                <Button className="_button">L</Button>
                <Button className="_button">X</Button>
              </ButtonGroup>
            </ListGroup.Item>
            <ListGroup.Item className="product_colors border-0">
              <span className="label">Color:</span>
              <DropDown className="drop_menu">
                <DropDown.Toggle className="drop_toggle">
                  Choose an Option
                </DropDown.Toggle>
                <DropDown.Menu>
                  <DropDown.Item>Beige</DropDown.Item>
                  <DropDown.Item>Maroon</DropDown.Item>
                  <DropDown.Item>Black</DropDown.Item>
                </DropDown.Menu>
              </DropDown>
            </ListGroup.Item>
            <ListGroup.Item className="product_action border-0">
              <span className="label">Qty:</span>
              <ButtonGroup className="button_group">
                <Button className="_button">-</Button>
                <span className="_quantity">{product.quantity}</span>
                <Button className="_button">+</Button>
              </ButtonGroup>

              <GeneralButton
                link={'/products'}
                styleling="btn-theme"
                title="ADD TO CART"
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="label"> Share: </span>
              <span className="product_proption">
                <ExternalLinkIcon
                  link="https://facebook.com"
                  icon="fa-brands fa-facebook-f"
                />
              </span>

              <span className="product_proption">
                <ExternalLinkIcon
                  link="https://instagram.com"
                  icon="fa-brands fa-instagram"
                />
              </span>
              <span className="product_proption">
                <ExternalLinkIcon
                  link="https://twitter.com"
                  icon="fa-brands fa-twitter"
                />
              </span>
              <span className="product_proption">
                <ExternalLinkIcon
                  link="https://google.com"
                  icon="fa-brands fa-google"
                />
              </span>
              <span className="product_proption">
                <ExternalLinkIcon
                  link="https://linkedin.com"
                  icon="fa-brands fa-linkedin"
                />
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
