import { useState, useEffect } from 'react';
import apiClient from '../../../core/interceptor/interceptor';


const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const fetchData = async () => {
    setIsLoading(true);
    try{
      const response = await apiClient.get(url);
      setProducts(response.data);
      setIsError(false);
    }
    catch(error){
      setIsError(true);
    }
    finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {products, setProducts, fetchData, isLoading, isError};
};

export default useFetchProducts;