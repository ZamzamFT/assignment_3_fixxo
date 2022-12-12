import React from 'react';
import { Helmet } from 'react-helmet-async';
//import Offcanvas from 'react-bootstrap/Offcanvas';
//import { useShoppingCartContext } from '../Features/Contexts/ShoppingCartContext';
import SignInForm from '../Features/Components/SignInForm';
import { Container } from 'react-bootstrap';

interface SignProps {
  loginOpen?: boolean;
}
const SignIn: React.FC<SignProps> = ({ loginOpen }) => {

  return (
    <div>
      <Helmet>
        <title>Sign in | Fixxo</title>
      </Helmet>
      <Container>
        <SignInForm />
      </Container>
    </div>
  );
};

export default SignIn;
