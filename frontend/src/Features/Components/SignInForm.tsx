import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useShoppingCartContext } from '../Contexts/ShoppingCartContext';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  const navigate = useNavigate();


  const {state, dispatch} = useShoppingCartContext()

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const {data } = await axios.post('/api/users/signin', {
        email,
        password
      })
      dispatch({type: 'USER_SIGNIN', payload: data})
      navigate(redirect || '/')


      console.log(data)

    } catch (err) {
      alert('invalid email or password')

    }

  }
  return (
    <div>
      <h1>Sign In</h1>   
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required onChange={(e: any) => setEmail(e.target.value) } />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required  onChange={(e: any) => setPassword(e.target.value) }/>
        </Form.Group>

        <div className="mb-3">
          <Button type="submit" variant="light" className="bg-accent">
            Sign In
          </Button>
        </div>

        <div className="mb-3">
          New Customer?
          <Link to={`/Signup?redirect=${redirect}`}>Create Your Account</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
