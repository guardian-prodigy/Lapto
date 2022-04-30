import { useEffect } from 'react';
import axios from 'axios';
import authFetch from '../axios/custom/custom';
const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-products")
      const resp2 = await authFetch(randomUserUrl)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
