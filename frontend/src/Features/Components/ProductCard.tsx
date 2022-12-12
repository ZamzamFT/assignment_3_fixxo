// Dependency
import React from 'react';
// Components
import GeneralButton from './Buttons/GeneralButton';
import RatingComponent from './RatingComponent';
import { CurrencyFormatter } from '../Utilities/CurrencyFormatter';
// Model
import { IProduct } from '../Models/IProduct';
// Bootstrap Component
import Card from 'react-bootstrap/Card';
import { useShoppingCartContext } from '../Contexts/ShoppingCartContext';
import axios from 'axios';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useShoppingCartContext();
  const { cart } = state;

  // move this function to shoppingcart context
  const addToCartHandler = async () => {
    const controllItem = cart.cartItems.find((x: any) => x._id === product._id);
    const quantity = controllItem ? controllItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry this Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
  };

  return (
    <Card className="card">
      <img src={product.image} alt={product.name} />
      <div className="card_menu">
        <button className="menu-link">
          <i className="fa-regular fa-heart"></i>
        </button>
        <button className="menu-link">
          <i className="fa-regular fa-code-compare fa-flip-horizontal"></i>
        </button>
        <button onClick={addToCartHandler} className="menu-link">
          <i className="fa-regular fa-bag-shopping"></i>
        </button>
      </div>
      <GeneralButton
        link={`/products/${product.slug}`}
        styleling="btn-theme "
        title="QUICK VIEW"
      />
      <Card.Body className="card_b text-center">
        <Card.Text className="_category">{product.category}</Card.Text>
        <Card.Title className="_title">{product.name}</Card.Title>
        <RatingComponent
          rating={product.rating}
          numReviews={product.numReviews}
        />
        <Card.Text className="_price">
          {CurrencyFormatter(product.price)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
