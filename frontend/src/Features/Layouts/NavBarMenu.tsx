import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '../Components/MenuIcon';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import NavDropDown from 'react-bootstrap/NavDropDown';
import {LinkContainer} from 'react-router-bootstrap';


import { useShoppingCartContext } from '../Contexts/ShoppingCartContext';

const NavBarMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { state, dispatch} = useShoppingCartContext();
  const { cart, userInfo } = state;
  const { openCart } = useShoppingCartContext();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const signOutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })

  }

  return (
    <Navbar className="Navbar bg-primary p-1" sticky="top">
      <Container className="container">
        <NavLink className="logo" to="/" end>
          Fixxo.
        </NavLink>
        <div className={`menu-links ${showMenu ? 'd-grid' : ''}`}>
          <NavLink className="menu-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="menu-link" to="/Categories" end>
            Categories
          </NavLink>
          <NavLink className="menu-link" to="/Products">
            Products
          </NavLink>
          <NavLink className="menu-link" to="/Contact" end>
            Contact
          </NavLink>
        </div>

        <div className="menu-icons">
          <MenuIcon
            link="/search"
            icon="fa-regular fa-magnifying-glass"
            hideOnMobile={true}
          />
          <MenuIcon
            hideOnTablet={true}
            link="/compare"
            icon="fa-regular fa-code-compare fa-flip-horizontal"
          />
          <MenuIcon quantity={5} link="/wishlist" icon="fa-regular fa-heart" />

          <MenuIcon link="/signin" icon="fa-light fa-user" />

          {cart.cartItems.length > 0 && (
            <Button className="menu-icon" onClick={openCart}>
              <i className="fa-regular fa-bag-shopping"></i>

              <Badge
                pill
                bg="danger"
                className=" position-absolute top-0 start-100 translate-middle badge rounded-pill"
              >
                {cart.cartItems.reduce(
                  (accumulator: any, currentItem: any) =>
                    accumulator + currentItem.quantity,
                  0
                )}
              </Badge>
            </Button>
          )}
          {userInfo ? (
            <NavDropDown title={userInfo.name} id="basic-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropDown.Item>User Profile</NavDropDown.Item>
              </LinkContainer>

              <LinkContainer to="/orderhistory">
                <NavDropDown.Item>Order History</NavDropDown.Item>
              </LinkContainer>
              <NavDropDown.Divider />
              <Link className='dropdown-item' to="/signout" onClick={signOutHandler}>
                Sign Out
              </Link>

            </NavDropDown>

          ) :
          (
            <Link className="nav-link" to="/signin"></Link>
          )}
          <button
            onClick={toggleMenu}
            className="menu-icon btn-menu-icon d-xl-none"
          >
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </Container>
    </Navbar>
  );
};
export default NavBarMenu;
