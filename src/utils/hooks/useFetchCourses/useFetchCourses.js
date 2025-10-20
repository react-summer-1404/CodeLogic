import { useState, useEffect } from 'react';
import apiClient from '../../../core/interceptor/interceptor';


const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const fetchData = async () => {
    setIsLoading(true);
    try{
      const response = await apiClient.get(url);
      const courseArray = response.data?.courseFilterDtos || [];
      setData(courseArray);
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
    if(!url) return;
    fetchData();
  }, [url]);

  return {data, setData, fetchData, isLoading, isError};
};

export default useFetchData;