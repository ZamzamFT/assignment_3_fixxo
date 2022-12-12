// Base Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Routes, Route } from 'react-router-dom';
// Pages
import Categories from './Pages/Categories';
import Compare from './Pages/Compare';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import NotFound from './Pages/NotFound';
import ProductDetails from './Pages/ProductDetailsPage';
import Products from './Pages/Products';
import Search from './Pages/Search';
import ShoppingCart from './Pages/ShoppingCart';
import SignUp from './Pages/SignUp';
import WishList from './Pages/WishList';
// Section
import NavBarMenu from './Features/Layouts/NavBarMenu';
import FooterSection from './Features/Layouts/FooterMenu';
import ShoppingContextProvider from './Features/Contexts/ShoppingCartContext';
import ProductContextProvider from './Features/Contexts/ProductContext';

function App() {
  return (
    <>
      <ShoppingContextProvider>
        <ProductContextProvider>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterSection />
        </ProductContextProvider>
      </ShoppingContextProvider>
    </>
  );
}

export default App;
