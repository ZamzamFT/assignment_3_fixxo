import React, { useContext, useReducer, createContext} from 'react';
import axios from 'axios';
import { IProduct } from '../Models/IProduct';
import { useParams } from 'react-router-dom';


interface ProviderProps {
  children: any;
}

export interface IProductContext {
  product: IProduct
  products: IProduct[]
  loading: boolean
  error: string
  getProduct: () => void
  getAllProducts: () => void
}

const intialState = {
  product: [],
  products: [],
  loading: true,
  error: '',
}

export const ProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () => {return useContext(ProductContext)}

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

const  ProductContextProvider: React.FC<ProviderProps> = ({children}) => {
  const [{ loading, error, products, product }, dispatch] = useReducer(reducer, intialState);
  const params = useParams();
  const { slug } = params;


  // Getting all products
  const getAllProducts = async () => {
    dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err: any) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };


    // get a product by slug
    const getProduct = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err: any) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      };
      

   

  return <ProductContext.Provider value={{getAllProducts, getProduct, products, loading, error, product}}>
    {children}
  </ProductContext.Provider>

}

export default ProductContextProvider;