import React from 'react';
//import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useShoppingCartContext } from '../Features/Contexts/ShoppingCartContext';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
//import SignIn from './SignIn';

interface ShoppingCartProps {
  isOpen?: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  const { state } = useShoppingCartContext();
  const {
    cart: { cartItems },
  } = state;
  const { closeCart } = useShoppingCartContext();

  const { updateCartHandler, checkOutHandler, removeItemHandler } =
    useShoppingCartContext();
    //const {openLogin} = useShoppingCartContext()


  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>

      <Offcanvas
        placement="end"
        show={isOpen}
        onHide={closeCart}
        className="Shopping_canvas bg-primary "
      >
        <div>
         {/* <Button variant="light" onClick={openLogin}
          >Login
          </Button> */}
          <Button variant="light">Log in</Button>

          <Button variant="light">Sign Up</Button>
        </div>

        <Offcanvas.Header closeButton className="header">
          <Offcanvas.Title className="fw-bold">Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col md={12}>
              {cartItems.length === 0 ? (
                'cart is empty'
              ) : (
                <ListGroup>
                  {cartItems.map((item: any) => (
                    <ListGroup.Item key={item._id}>
                      <Row className="cart_details_container">
                        <Col md={4} className="img-holder">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded img-thumbnail"
                          />
                          <Link className="ms-2" to={`/products/${item.slug}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={2} className="ms-5 d-flex">
                          <Button
                            variant="light"
                            onClick={() =>
                              updateCartHandler(item, item.quantity - 1)
                            }
                            disabled={item.quantity === 1}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>
                          <span>{item.quantity}</span>

                          <Button
                            variant="light"
                            onClick={() =>
                              updateCartHandler(item, item.quantity + 1)
                            }
                            disabled={item.quantity === item.countInStock}
                          >
                            {' '}
                            <i className="fas fa-plus-circle"></i>
                          </Button>
                        </Col>
                        <Col md={2} className="ms-4">
                          {item.price}
                        </Col>
                        <Col md={2} className=" ms-4">
                          <Button
                            onClick={() => removeItemHandler(item)}
                            variant="light"
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>
                      Subtotal (
                      {cartItems.reduce((a: any, c: any) => a + c.quantity, 0)}{' '}
                      items) : $
                      {cartItems.reduce(
                        (a: any, c: any) => a + c.price * c.quantity,
                        0
                      )}
                    </h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        type="button"
                        onClick={checkOutHandler}
                        variant="light"
                        disabled={cartItems.length === 0}
                      >
                        Check Out
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShoppingCart;
