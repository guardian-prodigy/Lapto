import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const {data} = await axios(url);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>{ }</h2>;
};
export default FirstRequest;
